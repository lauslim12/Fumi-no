import { Action, Configuration } from '../types/Data';
import { setLocalConfig } from './config';

/**
 * Reducer to help manage global state manipulations.
 *
 * @param state - Initial or current state.
 * @param action - Action that we want to perform.
 * @returns An updated state.
 */
const reducer = (state: Configuration, action: Action): Configuration => {
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
      const editedData = [...data.slice(0, index), action.payload.data, ...data.slice(index + 1)];
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
      setLocalConfig('name', action.payload.name);
      setLocalConfig('data', action.payload.data);
      setLocalConfig('customDateWidget', action.payload.customDateWidget);

      return action.payload;

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

export default reducer;
