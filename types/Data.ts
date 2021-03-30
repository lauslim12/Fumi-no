import { Dispatch, SetStateAction } from 'react';
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
 */
export type Configuration = {
  name: string;
  data: Data[];
};

/**
 * Union of both types to represent the React Context.
 */
type LocalStorageDataStore = Configuration & {
  setName: Dispatch<SetStateAction<string>>;
  setData: Dispatch<SetStateAction<Data[]>>;
};

export default LocalStorageDataStore;
