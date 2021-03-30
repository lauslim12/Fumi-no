import { memo, ReactNode, useEffect, useMemo, useState } from 'react';
import { Data } from '../types/Data';
import UserContext from '../utils/config';

/**
 * Provider function to help provide the values for the context.
 */
const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState([] as Data[]);
  const [name, setName] = useState('Dreamer');

  /**
   * First things first, when first time loading a component, load the data.
   */
  useEffect(() => {
    const localStorageData = localStorage.getItem('data');
    const localStorageName = localStorage.getItem('name');

    setData(localStorageData !== null ? JSON.parse(localStorageData) : []);
    setName(localStorageName !== null ? localStorageName : 'Dreamer');
  }, []);

  /**
   * Save the state of the 'name'.
   */
  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  /**
   * Save the state of the 'data'.
   */
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  /**
   * Memoize values to prevent unnecessary re-renders.
   */
  const value = useMemo(
    () => ({
      data,
      setData,
      name,
      setName,
    }),
    [data, setData, name, setName]
  );

  /**
   * Return a new provider.
   */
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default memo(ConfigProvider);
