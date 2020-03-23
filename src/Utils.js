/**
 * // todo:
 * Get the index of the next element in a list
 * @param {Number} currentIndex
 * @param {*} list - an array or nodeList
 */
export function getNextIndex(currentIndex, list) {
  if (currentIndex < list.length - 1) {
    return currentIndex + 1;
  }
  return 0;
}

export function getPreviousIndex(currentIndex, list) {
  if (currentIndex > 0) {
    return currentIndex - 1;
  }
  return list.length - 1;
}
