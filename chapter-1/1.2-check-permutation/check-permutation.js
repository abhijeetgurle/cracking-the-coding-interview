// Time Complexity: O(NlogN)
// Space Complexity: O(1)
const checkPermutationUsingSorting = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  if (sortedStr1 === sortedStr2) return true;
  else return false;
};

// Time Complexity: O(N)
// Space Complexity: O(26) => O(1)
const checkPermutationUsingHashMap = (str1, str2) => {
  const hasMap = {};

  if (str1.length !== str2.length) return false;

  for (let ch of str1) {
    if (ch in hasMap) {
      hasMap[ch]++;
    } else {
      hasMap[ch] = 1;
    }
  }

  for (let ch of str2) {
    if (ch in hasMap) {
      hasMap[ch]--;
      if (hasMap[ch] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};

console.log(checkPermutationUsingSorting("aabhi", "abaih"));
console.log(checkPermutationUsingSorting("abbhi", "abaih"));
console.log(checkPermutationUsingHashMap("aabhi", "abaih"));
console.log(checkPermutationUsingHashMap("abbhi", "abaih"));
