// @ts-ignore
import { createLogger, format, transports } from 'winston';
import { config } from './index';

// Set level from LOG_LEVEL env variable
let level = config.logLevel;

// If level is not set, determine its value from NODE_ENV
if (!level) {
  switch (process.env.NODE_ENV) {
    case 'production':
      level = 'info';
      break;
    case 'test':
      level = 'logs-disabled';
      break; // This level does not exists, thus logs will be disabled
    default:
      level = 'debug';
  }
}

const logger = createLogger({
  level,
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: 'YYYY-MM-DD hh:mm:ss A'
    }),
    format.align(),
    format.printf((info: any) => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [new transports.Console()]
});

export default logger;
