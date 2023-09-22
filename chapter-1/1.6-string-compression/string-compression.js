// Time Complexity:- O(N)
// SPace complexity:- O(N)
const stringCompression = (str) => {
  let currentCharIdx = 0;
  let lastCharIdx = 0;
  let compressedString = "";

  if (str.length === 0) return "";

  while (lastCharIdx < str.length) {
    if (str[lastCharIdx] !== str[currentCharIdx]) {
      compressedString +=
        str[currentCharIdx] + (lastCharIdx - currentCharIdx).toString();
      currentCharIdx = lastCharIdx;
    }
    lastCharIdx++;
  }

  compressedString +=
    str[currentCharIdx] + (lastCharIdx - currentCharIdx).toString();
  return compressedString;
};

console.log(stringCompression("aabcccccaaa"));
console.log(stringCompression(""));
console.log(stringCompression("aabcccaaccaa"));
