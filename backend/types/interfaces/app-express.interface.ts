import { Application } from 'express';
import { Db, MongoClient } from 'mongodb';

export interface IMongo {
  db: Db;
  dbClient: MongoClient;
}

export interface IExtendedExpressApp extends Application {
  locals: IMongo;
}
