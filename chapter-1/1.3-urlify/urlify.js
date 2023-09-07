// Time Complexity:- O(N^2)
const URLify = (str, len) => {
  const strArr = str.split("");
  for (let i = 0; i < str.length; i++) {
    if (strArr[i] === " ") {
      for (let j = str.length - 1; j > i + 3; j--) {
        strArr[j] = strArr[j - 2];
      }

      strArr[i] = "%";
      strArr[i + 1] = "2";
      strArr[i + 2] = "0";
    }
  }

  return strArr.join("");
};

// TIME COMPLEXITY:- O(N)
// SPACE COMPLEXITY:- O(N)
const URLify2 = (str, len) => {
  let s = "";
  let totalSpaces = str.length - len;
  let frontSpaces = 0;
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    if (flag === false) {
      if (str[i] === " ") frontSpaces++;
      else flag = true;
    }
    if (flag === true && i < str.length - (totalSpaces - frontSpaces)) {
      if (str[i] === " ") s += "%20";
      else s += str[i];
    }
  }

  return s;
};

console.log(URLify("Mr John Smith    ", 13));
console.log(URLify2("Mr John Smith    ", 13));
