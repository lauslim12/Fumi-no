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
};

/**
 * Union of both types to represent the application's local storage.
 */
type LocalStorageDataStore = Configuration & {
  data: Data[];
};

export default LocalStorageDataStore;
