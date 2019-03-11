import moment from 'moment';
import { ObjectID } from 'mongodb';

import data from './data.json';

function handleRegisteredDate(registeredDate: string) {
  const date = registeredDate.replace(/\s/g, '');
  const transformDate = moment.utc(date).format('YYYY-MM-DD');
  return transformDate;
}

export function transformData() {
  const transformData = data.map((record: any) => {
    const { eventID, ...filteredRecord } = record;
    return {
      ...filteredRecord,
      _id: new ObjectID(filteredRecord._id),
      balance: Number(record.balance.replace(',', '')),
      registered: handleRegisteredDate(record.registered)
    };
  });

  return transformData;
}

// export async function getNextSeq(collection: Collection<any>): Promise<number> {
//   const documentRecord = await collection.findOneAndUpdate(
//     { seqRef: 'ref' },
//     { $inc: { seqNumber: 1 } }
//   );

//   return documentRecord.value.seqNumber;
// }
