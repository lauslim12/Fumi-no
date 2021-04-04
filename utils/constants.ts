import { Configuration } from '../types/Data';
import { Colors } from '../types/Enums';

export const DefaultConfig: Configuration = {
  name: 'Dreamer',
  data: [],
  customDateWidget: 'false',
};

export const ConfigKeys = Object.keys(DefaultConfig) as (keyof Configuration)[];

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
