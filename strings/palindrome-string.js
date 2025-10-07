function solution(a){
    let start = 0;
    let end  = a.length-1;

    while(start<end){
        console.log(a[start], a[end])
        if(a[start] !== a[end]) return false
        start++
        end--
    }
    return true

}

console.log(solution('hello'))

// Ques 3 - Palindrome String
function palindromeString(str) {
  function rec(l, r) {
    if (str[l] != str[r]) return false;
    if (l >= r) return true;
    return rec(l + 1, r - 1);
  }
  return rec(0, str.length - 1);
}

palindromeString("nayyan");
