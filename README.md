# Palindrome
A palindrome is a word, sentence or other type of character sequence which reads the same backward as forward. For example, “racecar” and “Anna” are palindromes. “Table” and “John” aren’t palindromes, because they don’t read the same from left to right and from right to left.

# Reasoning about the challenge
This challenge revolves around the idea of reversing a string. If the reversed string is the same as the original input string, then you have a palindrome and your function should return true. Conversely, if the reversed string isn’t the same as the original input string, the latter is not a palindrome and your function is expected to return false.

# Solution
Start by turning your input string into lower case letters. Since you know you’re going to compare each character in this string to each corresponding character in the reversed string, having all the characters either in lower or upper case will ensure the comparison will leave out this aspect of the characters and just focus on the characters themselves.

Next, reverse the input string. You can do so by turning the string into an array using the String’s .split() method, then applying the Array’s .reverse() method and finally turning the reversed array back into a string with the Array’s .join() method. I’ve chained all these methods above so the code looks cleaner.

Finally, compare the reversed string with the original input and return the result — which will be true or false according to whether the two are exactly the same or not.
