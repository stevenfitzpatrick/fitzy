export const keys = {
  Backspace: 8,
  Enter: 13,
  Escape: 27,
  Delete: 46
};

/**
 * Check whether input field type is Boolean Type
 * @param {string} type Input Field Type
 */
export function keyMatches(key, list) {
  return list.includes(key);
}

export function isEnter(key) {
  return key === keys.Enter;
}

export function isDelete(key) {
  return [keys.Delete, keys.Backspace].includes(key);
}
