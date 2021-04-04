import { memo, ReactNode, useEffect, useMemo, useReducer } from 'react';
import ConfigReducer from '../utils/reducer';
import UserContext from '../utils/config';
import { ConfigKeys, DefaultConfig } from '../utils/constants';

/**
 * A helper function to get all data from the local storage.
 * This function also maps them according to all of the possible keys.
 *
 * @returns A modified object according to the local storage.
 */
const getLocalConfig = () => {
  const newObject = { ...DefaultConfig };

  for (const key of ConfigKeys) {
    const item = localStorage.getItem(key);

    try {
      newObject[key] = JSON.parse(item || '');
    } catch {
      // Ignored.
    }
  }

  return newObject;
};

/**
 * Provider function to help provide values for the context.
 *
 * @param children - ReactNode to be wrapped around the component.
 * @returns React Context Provider
 */
const ConfigProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(ConfigReducer, DefaultConfig);

  /**
   * 1) When first time loading a component, load the data.
   * 2) Dispatch all the gathered data to the React Context.
   */
  useEffect(() => {
    const userData = getLocalConfig();

    dispatch({ type: 'initializeContext', payload: userData });
  }, []);

  /**
   * Memoize values to prevent unnecessary re-renders.
   */
  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default memo(ConfigProvider);
