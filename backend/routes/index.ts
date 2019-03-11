import { Router } from 'express';
import { celebrate } from 'celebrate';

import * as handlers from './../handlers';
import { JoiCustomerCreate, JoiCustomerID, JoiCustomerUpdate } from './validation';

const router: Router = Router();

router.get('/customers', handlers.getAllCustomersData);

router.get('/customers/total', handlers.getTotalBalance);

router.get('/customers/inactive', handlers.getInactiveCustomers);

router.get('/customers/:_id', celebrate(JoiCustomerID), handlers.getCustomerByID);

router.post('/customers', celebrate(JoiCustomerCreate), handlers.createCustomer);

router.put('/customers/:_id', celebrate(JoiCustomerUpdate), handlers.updateCustomer);

router.delete('/customers/:_id', celebrate(JoiCustomerID), handlers.deleterCustomer);

export const Routes: Router = router;
