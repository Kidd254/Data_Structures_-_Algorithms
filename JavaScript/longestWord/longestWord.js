function longestWordLength(sentence) {
  const words = sentence.match(/[a-zA-Z]+/g) || [];
  const longestWord = words.reduce((longest, current) => (current.length > longest.length ? current : longest), "");
  return longestWord.length;
}

console.log(longestWordLength("The quick brown fox jumped over the lazy dog")); // Should return 6 (jumped)
console.log(longestWordLength("Hello, World!")); // Should return 5 (World)
