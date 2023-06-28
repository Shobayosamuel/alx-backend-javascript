/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */

export default function appendToEachArrayValue(array, appendString) {
  const ansArray = [];
  for (const value of array) {
    ansArray.push(appendString + value);
  }

  return ansArray;
}