/**
 * This function is used to validate a string, whether it is a valid JSON or not.
 * Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
 * JSON.parse(null) returns null, and typeof null === "object".
 * We must check for that, too. Thankfully, null is falsey, so this function alone suffices.
 *
 * @param str - JSON string.
 * @returns Boolean value whether the JSON is valid or not.
 */
export const jsonValidate = (str: string): boolean => {
  try {
    const parsedJSON = JSON.parse(str);

    if (parsedJSON && typeof parsedJSON === 'object') return true;
  } catch (err) {
    // Ignored.
  }

  return false;
};

/**
 * This function is used to transform 'true' (string) to 'true' (boolean) and in reverse.
 * This is done as local storage can only store serializable values (usually strings).
 *
 * @param str - Either 'true' or 'false'
 * @returns A boolean, symbolizing the boolean value of the 'true' or 'false'.
 */
export const isStringTrue = (str: 'true' | 'false'): boolean => JSON.parse(str);
