import { Action, Configuration } from '../types/Data';
import { DefaultConfig } from '../utils/constants';

/**
 * Type to manage the 'setLocalConfig' function.
 */
type TKey = keyof Configuration;
type TValue = typeof DefaultConfig[TKey];

/**
 * This function is used to set the user's state into the browser's local storage.
 *
 * @param key - Key of all configuration type.
 * @param value - Value that we want to change.
 */
const setLocalConfig = (key: TKey, value: TValue) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Reducer to help manage global state manipulations.
 *
 * @param state - Initial or current state.
 * @param action - Action that we want to perform.
 * @returns An updated state.
 */
const ConfigReducer = (state: Configuration, action: Action): Configuration => {
  const { data } = state;

  switch (action.type) {
    case 'addData':
      const addedData = [...data, action.payload];
      setLocalConfig('data', addedData);

      return {
        ...state,
        data: addedData,
      };

    case 'editData':
      const index = data.findIndex((blessing) => blessing.id === action.payload.currentId);
      const editedData = [
        ...data.slice(0, index),
        action.payload.data,
        ...state.data.slice(index + 1),
      ];
      setLocalConfig('data', editedData);

      return {
        ...state,
        data: editedData,
      };

    case 'deleteData':
      const indexOfData = data.findIndex((blessing) => blessing.id === action.payload);
      const deletedData = [...data.slice(0, indexOfData), ...data.slice(indexOfData + 1)];
      setLocalConfig('data', deletedData);

      return {
        ...state,
        data: deletedData,
      };

    case 'overwriteData':
      setLocalConfig('data', action.payload);

      return {
        ...state,
        data: action.payload,
      };

    case 'editName':
      setLocalConfig('name', action.payload);

      return {
        ...state,
        name: action.payload,
      };

    case 'editCustomDateWidget':
      setLocalConfig('customDateWidget', action.payload);

      return {
        ...state,
        customDateWidget: action.payload,
      };

    case 'initializeContext':
      return action.payload;

    default:
      throw new Error(`Reducer does not support action type: ${action}.`);
  }
};

export default ConfigReducer;
