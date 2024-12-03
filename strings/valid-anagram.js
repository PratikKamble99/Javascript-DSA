// Ques 4 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

// Approach 1
function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  return s.split('').sort().join('') === t.split('').sort().join('');
}

// console.log(validAnagram("anagram", "nagaramr"))
// console.log(validAnagram("tar", "car"));

// Approach 1

function validAnagram2(s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {}
  let obj2 = {}

  for(let i=0; i<s.length;i++){
    obj1[s[i]] = obj1[s[i]]+1||0;
    obj2[t[i]] = obj2[t[i]]+1||0;
  }

  for(key in obj1){
    if(obj1[key] !== obj2[key]) return false
  }
  return true
};


console.log(validAnagram2("anagram", "nagaram"))
console.log(validAnagram2("tar", "car"));