'use strict';

function add(numbers) {
  let result = 0;
  for(const num of numbers) {
    result += num;
  }
  return result;
}

module.exports = {
  add: add
};