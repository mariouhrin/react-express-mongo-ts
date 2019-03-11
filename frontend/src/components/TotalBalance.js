import React, { useState, useEffect } from 'react';
import { axiosHandler } from '../utils/utils';

export function TotalBalance({ appInstance }) {
  const [totalBalance, setTotalBalance] = useState(undefined);

  const fetchTotalBalance = async () => {
    const response = await axiosHandler('get', 'api/customers/total');
    setTotalBalance(response.data.totalBalance);
  };

  useEffect(() => {
    fetchTotalBalance();
  }, [appInstance]);

  return (
    <div style={{ marginLeft: '7.5%', marginTop: '40px', marginBottom: '30px' }}>
      <h2 style={{ color: 'navy' }}>Total balance: {totalBalance}</h2>
    </div>
  );
}
