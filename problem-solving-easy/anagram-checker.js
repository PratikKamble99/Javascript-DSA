function isAnagram(str1, str2) {
  const afterRemoveNonLetterStr1 = [
    ...str1.replace(/[^a-zA-Z]/g, "").toLowerCase(),
  ]
    .sort()
    .join("");
  const afterRemoveNonLettersStr2 = [
    ...str2.replace(/[^a-zA-Z]/g, "").toLowerCase(),
  ]
    .sort()
    .join("");

  if (
    afterRemoveNonLetterStr1.length !== afterRemoveNonLettersStr2.length ||
    afterRemoveNonLetterStr1 !== afterRemoveNonLettersStr2
  ) {
    return false;
  }

  return true;
}

//For the purpose of user debugging.
console.log(isAnagram("listen", "silent"));
