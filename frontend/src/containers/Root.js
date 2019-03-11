import React, { createContext, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { setConfig } from 'react-hot-loader';
import { ToastContainer, toast } from 'react-toastify';

import 'purecss/build/pure.css';
import 'react-table/react-table.css';
import 'react-toastify/dist/ReactToastify.css';

import {
  TableAllCustomers,
  TotalBalance,
  TableNotActiveCustomers,
  CreateCustomer
} from '../components';

export const AppContext = createContext();

function Root() {
  const [appInstance, setAppInstance] = useState(0);

  const notify = () => {
    toast.info('Processing ...', {
      position: toast.POSITION.TOP_RIGHT
    });
  };

  return (
    <AppContext.Provider value={{ appInstance, setAppInstance, notify }}>
      <section className="root">
        <ToastContainer autoClose={1000} />

        <TotalBalance appInstance={appInstance} />

        <h3 style={{ marginLeft: '7.5%' }}>List of all customers</h3>

        <CreateCustomer />
        <TableAllCustomers />

        <h3 style={{ marginLeft: '7.5%', marginTop: '35px' }}>List of all inactive customers</h3>

        <TableNotActiveCustomers appInstance={appInstance} />
      </section>
    </AppContext.Provider>
  );
}

setConfig({
  ignoreSFC: true,
  pureRender: true
});

export default hot(Root);
