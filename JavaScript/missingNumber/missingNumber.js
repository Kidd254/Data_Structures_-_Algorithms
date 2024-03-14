function findMissingNumber(arr, n) {
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // Should return 3
console.log(findMissingNumber([10, 8, 7, 5, 4, 3, 2, 1], 10)); // Should return 6
