import { useEffect, useState } from 'react';

export const useHttp = (func, param) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await func(param);
        setData(data);
      } catch (error) {
        setError(error.massege);
        console.log('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [func, param]);
  return [data, setData, loading, error];
};

// const [trendings, setTrendings] = useHttp(fetchMovies);
