import { Joi } from 'celebrate';

export const JoiCustomerCreate = {
  body: Joi.object().keys({
    _id: Joi.string().optional(),
    index: Joi.string().optional(),
    guid: Joi.string().optional(),
    isActive: Joi.boolean(),
    balance: Joi.number()
      .integer()
      .required(),
    age: Joi.number()
      .integer()
      .required(),
    name: Joi.strict().required(),
    gender: Joi.string()
      .valid('male', 'female')
      .required(),
    company: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    registered: Joi.string().optional()
  })
};

export const JoiCustomerID = {
  params: {
    _id: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required()
  }
};

export const JoiCustomerUpdate = {
  ...JoiCustomerID,
  ...JoiCustomerCreate
};
