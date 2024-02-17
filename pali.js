const palindrome = (str) =>{
  let reverse = str.split('').reverse().join('');
  return str === reverse;
}

console.log(palindrome('racecar')) // true
