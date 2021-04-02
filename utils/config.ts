import { createContext } from 'react';
import LocalStorageDataStore from '../types/Data';
import { defaultConfigurations } from './constants';

/**
 * Default state for the context.
 */
export const defaultState: LocalStorageDataStore = {
  name: defaultConfigurations.name,
  data: defaultConfigurations.data,
  customDateWidget: defaultConfigurations.customDateWidget,
  setName: () => {},
  setData: () => {},
  setCustomDateWidget: () => {},
};

/**
 * Creation of a new context.
 */
const UserContext = createContext<LocalStorageDataStore>(defaultState);

export default UserContext;
