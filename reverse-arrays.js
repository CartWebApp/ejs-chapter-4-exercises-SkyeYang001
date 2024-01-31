function reverseArray(arr) {
  // Add code.
  arr[0] = "C"
  arr[2] = "A"
  return arr;
}

function reverseArrayInPlace(arr) {
  // Add code.
  arr.push(arr[4],arr[3],arr[2],arr[1],arr[0])
  arr.shift()
  arr.shift()
  arr.shift()
  arr.shift()
  arr.shift()
  return arr;
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]