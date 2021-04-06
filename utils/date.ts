/**
 * This function will transform a number to a month name.
 *
 * @param number - Number, should be from 1 to 11.
 * @returns The month name based on the given number.
 */
export const numberToMonth = (number: number): string => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return monthNames[number];
};

/**
 * This function will transform a number to a day name.
 *
 * @param number - Number, should be from 0 to 6.
 * @returns The day name based on the given number.
 */
export const numberToDay = (number: number): string => {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return dayNames[number];
};

/**
 * This object is to be used every time we need to use month as an item to be selected.
 * Example of use is in the 'CustomDateInput' component.
 */
export const monthArrayObject = [
  {
    key: 'M1',
    month: 0,
  },
  {
    key: 'M2',
    month: 1,
  },
  {
    key: 'M3',
    month: 2,
  },
  {
    key: 'M4',
    month: 3,
  },
  {
    key: 'M5',
    month: 4,
  },
  {
    key: 'M6',
    month: 5,
  },
  {
    key: 'M7',
    month: 6,
  },
  {
    key: 'M8',
    month: 7,
  },
  {
    key: 'M9',
    month: 8,
  },
  {
    key: 'M10',
    month: 9,
  },
  {
    key: 'M11',
    month: 10,
  },
  {
    key: 'M12',
    month: 11,
  },
];
