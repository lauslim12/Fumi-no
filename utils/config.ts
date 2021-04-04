import { createContext, Dispatch } from 'react';
import { Configuration, Action } from '../types/Data';
import { DefaultConfig } from './constants';

/**
 * Creation of a new context.
 */
const UserContext = createContext<{
  state: Configuration;
  dispatch: Dispatch<Action>;
}>({
  state: DefaultConfig,
  dispatch: () => {},
});

export default UserContext;
