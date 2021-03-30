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
 * Not using boolean as it might cause problems with the local storage.
 */
export type Configuration = {
  name: string;
  data: Data[];
  isNotTodayHidden: 'true' | 'false';
};

/**
 * Union of both types to represent the React Context.
 */
type LocalStorageDataStore = Configuration & {
  setName: Dispatch<SetStateAction<string>>;
  setData: Dispatch<SetStateAction<Data[]>>;
  setIsNotTodayHidden: Dispatch<SetStateAction<'true' | 'false'>>;
};

export default LocalStorageDataStore;
