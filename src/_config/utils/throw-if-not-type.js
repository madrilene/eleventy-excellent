/**
 * Throws an error if the argument is not of the expected type.
 *
 * @param {*} arg - The argument to check the type of.
 * @param {string} expectedType - The expected type of the argument.
 * @throws {Error} If the argument is not of the expected type.
 */

export const throwIfNotType = (arg, expectedType) => {
  if (typeof arg !== expectedType) {
    throw new Error(`Expected argument of type ${expectedType} but instead got ${arg} (${typeof arg})`);
  }
};
