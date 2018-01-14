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
