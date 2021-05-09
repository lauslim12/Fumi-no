import { memo, ReactNode, useEffect, useMemo, useReducer } from 'react';

import UserContext, { getLocalConfig } from '../utils/config';
import { DefaultConfig } from '../utils/constants';
import ConfigReducer from '../utils/reducer';

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
