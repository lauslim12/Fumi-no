import { Configuration } from '../types/Data';
import { Colors } from '../types/Enums';

export const DefaultConfig: Configuration = {
  name: 'User',
  data: [],
  customDateWidget: 'false',
};

export const configKeys = Object.keys(DefaultConfig) as (keyof Configuration)[];

export const radioValues: Colors[] = [
  'red',
  'green',
  'blue',
  'yellow',
  'orange',
  'teal',
  'cyan',
  'purple',
  'pink',
  'gray',
  'transparent',
];
