export const jsonValidate = (str: string): boolean => {
  try {
    const parsedJSON = JSON.parse(str);

    // Neither JSON.parse(false) or JSON.parse(1234) throw errors, hence the type-checking,
    // JSON.parse(null) returns null, and typeof null === "object",
    // so we must check for that, too. Thankfully, null is falsey, so this suffices.
    if (parsedJSON && typeof parsedJSON === 'object') return true;
  } catch (err) {
    // Ignored.
  }

  return false;
};
