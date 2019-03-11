import readConfig from './read-env';

readConfig();

export const config = {
  port: process.env.PORT,
  logLevel: process.env.LOG_LEVEL,
  mongoUrl: process.env.MONGO_URL,
  mongoDbName: process.env.MONGO_DB_NAME
};
