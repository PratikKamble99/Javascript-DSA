// Ques 1 : Truncate the text
// Write a function called truncate that checks the length of a given string - str, and if
// it surpasses a specified maximum length, maxlength, it replaces the end of the string
// with the ellipsis character "..." so that the length matches the maximum length

// Input: str = "Subscribe to RoadsideCoder" , maxlength=9
// Output: "Subscribe…"

function truncate(str, maxLength) {
  // if (str.length > maxLength) return str.substring(0, maxLength).concat('...');
  if (str.length > maxLength) return str.slice(0, maxLength) + ('...');
  return str
};

console.log(truncate("Subscribe to RoadsideCode", 9))