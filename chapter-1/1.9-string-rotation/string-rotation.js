const stringRotation = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const str1str1 = str1 + str1;
  return str1str1.includes(str2);
};

console.log(stringRotation("waterbottle", "erbottlewat")); // true
console.log(stringRotation("waterbottle", "ercottlewat")); // false
