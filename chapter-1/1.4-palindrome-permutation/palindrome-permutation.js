// Time Complexity:- O(N)
// Space Complexity:- O(26)
const isPalindromicPermutation = (str) => {
  const hash = {};
  let totalCharaceters = 0;
  for (let ch of str) {
    ch = ch.toLowerCase();
    if (ch in hash) {
      hash[ch]++;
      totalCharaceters++;
    } else if (ch !== " ") {
      hash[ch] = 1;
      totalCharaceters++;
    }
  }

  const allowedOddPair = totalCharaceters % 2;
  let currentOddPair = 0;

  Object.keys(hash).forEach((key) => {
    if (hash[key] % 2 !== 0) {
      currentOddPair++;
    }
  });

  return currentOddPair <= allowedOddPair;
};

console.log(isPalindromicPermutation("Tact Coa"));
console.log(isPalindromicPermutation("AAbbhhiiijjjeett"));
