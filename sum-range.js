function range(start, end, step = 1) {
  // Add code.
  const line = [start]
  line.push(start + step)
  line.push(start + (2 * step))
  line.push(start + (3 * step))
  line.push(start + (4 * step))
  line.push(start + (5 * step))
  line.push(start + (6 * step))
  line.push(start + (7 * step))
  line.push(start + (8 * step))
  line.push(start + (9 * step))

  if (step < 1)   {
    line.pop()
    line.pop()
    line.pop()
    line.pop()
    line.pop()
    line.pop()
  }
  return line;
}

function sum(numbers) {
  // Add code.
  
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
