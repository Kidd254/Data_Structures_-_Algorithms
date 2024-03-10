function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Should return 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // Should return 1
