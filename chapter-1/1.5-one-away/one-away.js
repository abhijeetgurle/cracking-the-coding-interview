// Time Complexity:- O(N)
// Space Complexity:- O(N)
const checkFoeEqualChars = (str1, str2) => {
  const map = {};

  for (const ch of str1) {
    if (ch in map) {
      map[ch]++;
    } else {
      map[ch] = 1;
    }
  }

  let foundDifferentChar = false;
  for (const ch of str2) {
    if (ch in map) {
      map[ch]--;
    } else {
      if (!foundDifferentChar) {
        foundDifferentChar = true;
      } else {
        return false;
      }
    }
  }

  Object.keys(map).forEach((key) => {
    if (map[key] !== 0) {
      return false;
    }
  });

  return true;
};

const checkForNonEqualChars = (str1, str2) => {
  const map = {};
  const largetString = str1.length > str2.length ? str1 : str2;
  const smallerString = str1.length > str2.length ? str2 : str1;

  for (const ch of largetString) {
    if (ch in map) {
      map[ch]++;
    } else {
      map[ch] = 1;
    }
  }

  for (const ch of smallerString) {
    if (ch in map) {
      map[ch]--;
    } else {
      return false;
    }
  }

  let foundDifferentChar = false;
  const keys = Object.keys(map);
  for (const key of keys) {
    if (map[key] !== 0) {
      if (!foundDifferentChar) {
        foundDifferentChar = true;
      } else {
        return false;
      }
    }
  }

  return true;
};

const checkOneAway = (str1, str2) => {
  if (str1.length === str2.length) {
    return checkFoeEqualChars(str1, str2);
  } else {
    return checkForNonEqualChars(str1, str2);
  }
};

console.log(checkOneAway("pale", "ple"));
console.log(checkOneAway("pales", "pale"));
console.log(checkOneAway("pales", "pal"));
console.log(checkOneAway("pale", "bale"));
console.log(checkOneAway("pale", "bake"));
