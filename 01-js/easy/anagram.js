/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  
  // Check if both strings are of same length
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert both strings to lowercase
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Convert both strings to array and sort them
  str1 = str1.split('').sort();
  str2 = str2.split('').sort();

  // Compare both strings
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }

  return true;

}

module.exports = isAnagram;
