import { createContext } from 'react';
import LocalStorageDataStore from '../types/Data';
import { DefaultConfig } from './constants';

/**
 * Default state for the context.
 */
export const defaultState: LocalStorageDataStore = {
  name: DefaultConfig.name,
  data: DefaultConfig.data,
  customDateWidget: DefaultConfig.customDateWidget,
  setName: () => {},
  setData: () => {},
  setCustomDateWidget: () => {},
};

/**
 * Creation of a new context.
 */
const UserContext = createContext<LocalStorageDataStore>(defaultState);

export default UserContext;
