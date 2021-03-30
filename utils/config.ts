import { createContext } from 'react';
import LocalStorageDataStore from '../types/Data';

/**
 * Default state for the context.
 */
export const defaultState: LocalStorageDataStore = {
  name: 'Dreamer',
  data: [],
  setName: () => {},
  setData: () => {},
};

/**
 * Creation of a new context.
 */
const UserContext = createContext<LocalStorageDataStore>(defaultState);

export default UserContext;
