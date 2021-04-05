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
