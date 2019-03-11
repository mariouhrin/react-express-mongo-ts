import express, { Response, NextFunction } from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { errors } from 'celebrate';
import { MongoClient } from 'mongodb';
import cors from 'cors';

import { Routes } from './routes';
import { config } from './config';
import { IExtendedExpressApp } from './types/interfaces/app-express.interface';
import { IExtendedRequest } from './types/interfaces/request.interface';
import logger from './config/logger';

const app: IExtendedExpressApp = express();
const port: number = Number(process.env.PORT);

// add morgan logger to express
app.use(morgan('dev'));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// add CORS policy
const corsOptions = {
  origin: ['http://localhost:8080', 'http://localhost:8081']
};
app.use(cors(corsOptions));

// add all routes to express
app.use('/api', Routes);

// handle Joi validation errors
app.use(errors());

// global error handling
app.use((err: Error, req: IExtendedRequest, res: Response, next: NextFunction) => {
  if (err.message.includes('Not found')) {
    return res.status(404).send(err.message);
  }
  res.send('Something goes wrong');
});

// run mongodb and express server
async function startApp() {
  try {
    const { mongoDbName, mongoUrl } = config;
    const client: MongoClient = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true
    });
    const db = client.db(mongoDbName);
    logger.info(`Connected to Mongodb: ${mongoDbName}`);

    app.locals.db = db;
    app.locals.dbClient = client;

    app.listen(port, () => {
      logger.info(`Listening at http://localhost:${port}`);
    });
  } catch (err) {
    logger.error(`Error in mongodb connection or server listening: ${err}`);
  }
}

// initialize app
startApp();
