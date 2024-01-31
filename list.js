function arrayToList(arr) {
  // Add code.
  let list = {
    value: arr[0],
    rest: {
      value: arr[1],
        rest: null 
      }
    }
    return list;
  }

function listToArray(list, arr) {
  // Add code.
  let arr = arrayToList[arr[0], arr[1], arr[2]];
  return arr;
}

// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
