function countVowels(str) {
  const vowels = /[aeiou]/gi;
  const vowelCount = (str.match(vowels) || []).length;
  return vowelCount;
}
console.log(countVowels("Hello, World!"));  // Should return 3 (e, o, o)
console.log(countVowels("JavaScript is awesome"));  // Should return 8 (a, i, e, a, i, o, e, e)
