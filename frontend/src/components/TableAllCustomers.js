import React, { createContext, useState, useEffect, useContext } from 'react';
import ReactTable from 'react-table';

import { axiosHandler } from '../utils/utils';
import { tableColumnsAllCustomers, customFilter, hideTablesScrollbar } from './helpers';
import { ModalPopUp } from './Modal';
import { AppContext } from '../containers/Root';

export const TableAllContext = createContext({ dataForUpdate: [], isUpdate: false });

export function TableAllCustomers() {
  const [data, setData] = useState([]);
  const [dataForUpdate, setDataForUpdate] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const { appInstance, setAppInstance } = useContext(AppContext);

  const handleOpenModal = (_id) => {
    setDataForUpdate(data.filter((record) => record._id === _id));
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const deleteCustomerByID = async (_id) => {
    await axiosHandler('delete', `api/customers/${_id}`);
    setAppInstance(appInstance + 1);
  };

  const fetchAllData = async () => {
    const response = await axiosHandler('get', 'api/customers');
    setData(response.data);
  };

  useEffect(() => {
    fetchAllData();
  }, [appInstance]);

  useEffect(() => {
    hideTablesScrollbar(openModal);
  }, [openModal]);

  return (
    <>
      <section style={{ width: '85%', margin: 'auto', fontSize: '14px', textAlign: 'center' }}>
        {data.length && (
          <ReactTable
            data={data}
            columns={tableColumnsAllCustomers(handleOpenModal, deleteCustomerByID)}
            filterable
            defaultFilterMethod={customFilter}
            defaultPageSize={7}
            defaultSorted={[
              {
                id: 'balance',
                desc: false
              }
            ]}
            className="-striped -highlight"
          />
        )}
        <TableAllContext.Provider value={{ dataForUpdate, isUpdate: true }}>
          <ModalPopUp isOpen={openModal} onRequestClose={handleCloseModal} />
        </TableAllContext.Provider>
      </section>
    </>
  );
}
