/**
 * Day is hardcoded from 1 - 31.
 * Month is using JavaScript's month number notation, from zero to 11 (Jan - Dec).
 */
export type Data = {
  id: string;
  blessing: string;
  color: 'red' | 'green' | 'blue' | 'yellow' | 'transparent';
  day:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31;
  month: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
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
