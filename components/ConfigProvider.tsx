import { memo, ReactNode, useEffect, useMemo, useState } from 'react';
import UserContext from '../utils/config';
import { defaultConfigurations } from '../utils/constants';

/**
 * Provider function to help provide the values for the context.
 */
const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState(defaultConfigurations.data);
  const [name, setName] = useState(defaultConfigurations.name);
  const [isNotTodayHidden, setIsNotTodayHidden] = useState(defaultConfigurations.isNotTodayHidden);

  /**
   * First things first, when first time loading a component, load the data.
   */
  useEffect(() => {
    const localStorageData = localStorage.getItem('data');
    const localStorageName = localStorage.getItem('name');
    const localStorageHidden = localStorage.getItem('isNotTodayHidden');

    setData(localStorageData ? JSON.parse(localStorageData) : data);
    setName(localStorageName ? localStorageName : name);
    setIsNotTodayHidden(
      localStorageHidden ? (localStorageHidden as 'true' | 'false') : isNotTodayHidden
    );
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
   * Save the state of the 'hidden'.
   */
  useEffect(() => {
    localStorage.setItem('isNotTodayHidden', isNotTodayHidden);
  }, [isNotTodayHidden]);

  /**
   * Memoize values to prevent unnecessary re-renders.
   */
  const value = useMemo(
    () => ({
      data,
      setData,
      name,
      setName,
      isNotTodayHidden,
      setIsNotTodayHidden,
    }),
    [data, setData, name, setName, isNotTodayHidden, setIsNotTodayHidden]
  );

  /**
   * Return a new provider.
   */
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default memo(ConfigProvider);
