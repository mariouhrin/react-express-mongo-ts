import { Collection } from 'mongodb';

import { IExtendedRequest } from './../types/interfaces/request.interface';

export async function getCustomersCollection(req: IExtendedRequest): Promise<Collection<any>> {
  const db = req.app.locals.db;
  const customersCollection: Collection<any> = await db.collection('customers');
  return customersCollection;
}

export function transformDataToRender(customersData: Customer[]) {
  const transformedData = customersData.map((record: Customer) => ({
    update: 'update',
    delete: 'delete',
    ...record,
    discount: Math.round(record.balance / 10)
  }));

  return transformedData;
}

export async function getSequenceCollection(req: IExtendedRequest): Promise<Collection<any>> {
  const db = req.app.locals.db;
  const sequence: Collection<any> = await db.collection('sequence');
  return sequence;
}

export async function getNextSeq(collection: Collection<any>): Promise<number> {
  const documentRecord = await collection.findOneAndUpdate(
    { seqRef: 'ref' },
    { $inc: { seqNumber: 1 } }
  );

  return documentRecord.value.seqNumber;
}
