import React, { useEffect, useState } from 'react';

export const useHttp = (func, param) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await func(param);
        setData(data);
      } catch (error) {
        console.log('Error fetching movies:', error);
      }
    };
    getData();
  }, [func, param]);
  return [data, setData, loading, error];
};
