import { MongoClient } from 'mongodb';

import { createCustomersCollection, createSequenceCollection } from './createCollections';
import { transformData } from './transformData';
import { config } from '../config';
import logger from './../config/logger';

async function connectAndInitDB() {
  const { mongoUrl, mongoDbName } = config;

  try {
    const client: MongoClient = await MongoClient.connect(mongoUrl!, {
      useNewUrlParser: true
    });

    const db = client.db(mongoDbName);

    const customersCollection = await createCustomersCollection(db);
    const initialCustomersData = transformData();
    await customersCollection.createIndex({ index: 1 }, { unique: true });
    await customersCollection.insertMany(initialCustomersData);
    logger.info('inserted initial customers data to db');

    const sequenceCollection = await createSequenceCollection(db);
    await sequenceCollection.insertOne({ seqNumber: 33, seqRef: 'ref' });
    process.exit();
  } catch (err) {
    logger.error(`Unable to connect to db with error: ${err}`);
  }
}

connectAndInitDB();
