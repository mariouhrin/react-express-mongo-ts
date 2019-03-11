import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';

import { axiosHandler } from '../utils/utils';
import { columnsInactive, customFilter } from './helpers';

export function TableNotActiveCustomers({ appInstance }) {
  const [data, setData] = useState([]);

  const fetchInactiveCustomers = async () => {
    const response = await axiosHandler('get', 'api/customers/inactive');
    setData(response.data);
  };

  useEffect(() => {
    fetchInactiveCustomers();
  }, [appInstance]);

  return (
    <>
      <section style={{ width: '45%', marginLeft: '7.5%', fontSize: '14px', textAlign: 'center' }}>
        {data.length && (
          <ReactTable
            data={data}
            columns={columnsInactive()}
            filterable
            defaultFilterMethod={customFilter}
            defaultPageSize={5}
            className="-striped -highlight"
          />
        )}
      </section>
    </>
  );
}
