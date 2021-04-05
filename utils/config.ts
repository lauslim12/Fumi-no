import { createContext, Dispatch } from 'react';
import { Configuration, Action, ConfigurationKey, ConfigurationValues } from '../types/Data';
import { ConfigKeys, DefaultConfig } from './constants';

/**
 * Creation of a new context to store global states.
 * Utilizes reducers to easily manage the states.
 */
const UserContext = createContext<{
  state: Configuration;
  dispatch: Dispatch<Action>;
}>({
  state: DefaultConfig,
  dispatch: () => {},
});

/**
 * A helper function to get all data from the local storage.
 * This function also maps them according to all of the possible keys.
 *
 * @returns A modified object according to the local storage.
 */
export const getLocalConfig = () => {
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
 * This function is used to set the user's state into the browser's local storage.
 *
 * @param key - Key of all configuration type.
 * @param value - Value that we want to change.
 */
export const setLocalConfig = (key: ConfigurationKey, value: ConfigurationValues) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export default UserContext;
