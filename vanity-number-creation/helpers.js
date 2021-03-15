const assignLetters = (phoneNumber) => {
  let letterAssignments = [
    "0",
    "1",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const separatedNums = phoneNumber
    .substring(phoneNumber.length - 7)
    .split("")
    .map(Number);
  let lettersArr = [];
  separatedNums.forEach((item) => {
    lettersArr = [...lettersArr, letterAssignments[item].split("")];
  });
  return lettersArr;
};

const uniqueCount = (str) => {
  let unique = "";
  str.split("").forEach((char) => {
    // if character has not been seen yet
    if (unique.indexOf(char) == -1) {
      // add character to 'unique'
      unique += char;
    }
  });
  return unique.length;
};

const getVanityOptions = (arr, pre) => {
  pre = pre || "";
  if (!arr.length) {
    return pre;
  }

  var ans = arr[0].reduce((ans, value) => {
    return ans.concat(getVanityOptions(arr.slice(1), pre + value));
  }, []);
  return ans;
};

module.exports = {
  assignLetters,
  uniqueCount,
  getVanityOptions,
};
