import { Colors, Days, Months } from './Enums';

/**
 * Day is hardcoded from 1 - 31.
 * Month is using JavaScript's month number notation, from zero to 11 (Jan - Dec).
 */
export type Data = {
  id: string;
  blessing: string;
  color: Colors;
  day: Days;
  month: Months;
  year: number;
};

/**
 * Configurations to customize the application.
 * Not using boolean as it might cause problems with the local storage.
 */
export type Configuration = {
  name: string;
  data: Data[];
  customDateWidget: 'true' | 'false';
};

/**
 * Types for the reducer.
 */
type AddDataAction = {
  type: 'addData';
  payload: Data;
};

type DeleteDataAction = {
  type: 'deleteData';
  payload: string;
};

type EditCustomDateWidgetAction = {
  type: 'editCustomDateWidget';
  payload: 'true' | 'false';
};

type EditDataAction = {
  type: 'editData';
  payload: {
    currentId: string;
    data: Data;
  };
};

type EditNameAction = {
  type: 'editName';
  payload: string;
};

type InitializeContextAction = {
  type: 'initializeContext';
  payload: Configuration;
};

type OverwriteDataAction = {
  type: 'overwriteData';
  payload: Configuration;
};

export type Action =
  | AddDataAction
  | DeleteDataAction
  | EditCustomDateWidgetAction
  | EditDataAction
  | EditNameAction
  | InitializeContextAction
  | OverwriteDataAction;
