import { Request } from 'express';
import { IExtendedExpressApp } from './app-express.interface';

export interface IExtendedRequest extends Request {
  app: IExtendedExpressApp;
}
