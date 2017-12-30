/**
 * Check whether input field type is Boolean Type
 * @param {string} type Input Field Type
 */
export function isBoolean(type) {
  return ['radio', 'checkbox'].includes(type);
}
