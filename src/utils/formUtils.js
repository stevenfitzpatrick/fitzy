/**
 * Check whether input field type is Boolean Type
 * @param {string} type Input Field Type
 */
export function isBoolean(type) {
  return ['radio', 'checkbox'].includes(type);
}

export function isEmpty(input = {}) {
  return !Object.keys(input).length > 0;
}

export const passwordRules = {
  upperCase: {
    message: 'Must have at least one upper-case character',
    pattern: /([A-Z]+)/
  },
  lowerCase: {
    message: 'Must have at least one lower-case character',
    pattern: /([a-z]+)/
  },
  over6: {
    message: 'Must be more than 6 characters',
    pattern: /(.{6,})/
  }
};
