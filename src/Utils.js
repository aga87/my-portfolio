/**
 * Get the next index in a list
 * @param {Number} currentIndex in a list
 * @param {Obj} list - an array or NodeList
 */
export function getNextIndex(currentIndex, list) {
  if (currentIndex < list.length - 1) {
    return currentIndex + 1;
  }
  return 0;
}

/**
 * Get the previous index in a list
 * @param {Number} currentIndex in a list
 * @param {Obj} list - an array or NodeList
 */
export function getPreviousIndex(currentIndex, list) {
  if (currentIndex > 0) {
    return currentIndex - 1;
  }
  return list.length - 1;
}
