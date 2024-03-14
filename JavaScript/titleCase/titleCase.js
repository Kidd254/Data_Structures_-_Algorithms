function titleCase(sentence) {
  const words = sentence.split(" ");
  const titleCasedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  return titleCasedWords.join(" ");
}

console.log(titleCase("the quick brown fox")); // Should return "The Quick Brown Fox"
console.log(titleCase("JavaScript is fun")); // Should return "JavaScript Is Fun"
