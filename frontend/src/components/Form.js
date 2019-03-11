import React, { useState, useContext } from 'react';

import { Inputs } from './Inputs';
import { Select } from './Select';
import { axiosHandler } from '../utils/utils';
import { inititialFormData } from './helpers';
import { AppContext } from '../containers/Root';
import { TableAllContext } from './TableAllCustomers';

export function Form() {
  const { dataForUpdate, isUpdate } = useContext(TableAllContext);
  const [data, setData] = useState(() => inititialFormData(dataForUpdate));
  const { appInstance, setAppInstance, notify } = useContext(AppContext);
  const httpMethod = isUpdate ? 'update' : 'create';

  const handleChange = (e) => {
    const field = e.target.id.split('-')[1];
    setData({ ...data, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { _id, ...sendData } = data;

    const requests = {
      create: {
        method: 'post',
        endpoint: 'api/customers'
      },
      update: {
        method: 'put',
        endpoint: `api/customers/${_id}`
      }
    };

    await axiosHandler(requests[httpMethod].method, requests[httpMethod].endpoint, sendData);
    setAppInstance(appInstance + 1);
  };

  return (
    <article className="form-wrapper">
      <div>
        <h3>Please {httpMethod === 'create' ? 'fill' : 'edit'} the form</h3>
        <form className="pure-form pure-form-stacked" onSubmit={handleSubmit}>
          <section className="form-inputs-wrapper">
            <fieldset>
              <Select data={data} handleChange={handleChange} />
              <Inputs data={data} handleChange={handleChange} range={{ start: 0, end: 3 }} />
            </fieldset>

            <fieldset>
              <Inputs data={data} handleChange={handleChange} range={{ start: 3 }} />
            </fieldset>
          </section>

          <button type="submit" className="pure-button button-custom" onClick={notify}>
            Submit
          </button>
        </form>
      </div>
    </article>
  );
}
