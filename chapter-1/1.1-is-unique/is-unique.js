// Brute Force Approach
// Time Complexity:- O(N^2)
// Space Complexity:- O(1)
const isUniqueBruteForce = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }

  return true;
};

// Using sorting
// Time Complexity:- O(NlogN)
// Space Complexity:- O(1)
const isUniqueUsingSorting = (str) => {
  const sortedString = str.split("").sort().join("");
  for (let i = 0; i < sortedString.length - 1; i++) {
    if (sortedString[i] === sortedString[i + 1]) {
      return false;
    }
  }

  return true;
};

// Using hash map
// Time Complexity:- O(N)
// Space Complexity:- O(1) as at max we can have 26 characters in the hash map
const isUniqueUsingHashMap = (str) => {
  const hashMap = {};
  for (let char of str) {
    if (char in hashMap) {
      return false;
    }
    hashMap[char] = true;
  }
  return true;
};

console.log(isUniqueBruteForce("house"));
console.log(isUniqueBruteForce("woof"));
console.log(isUniqueUsingSorting("house"));
console.log(isUniqueUsingSorting("woof"));
console.log(isUniqueUsingHashMap("house"));
console.log(isUniqueUsingHashMap("woof"));
