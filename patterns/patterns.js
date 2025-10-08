function pattern1(n) {
  /*

    *
   ***
  *****
 *******
*********

   */
  let str = "";
  for (let row = 1; row <= n; row++) {
    for (let j = 1; j <= n - row; j++) {
      str += " ";
    }

    for (let j = 1; j <= 2 * row - 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}

/* 

      * 
     * * 
    * * * 
   * * * * 
  * * * * * 


*/

function pattern(){
  let str = '';
  const n = 5;
  for (let row = 0; row < n; row++) {
      // print rows
      for (let j = 0; j <= n-row ; j++) {
          // print spaces
          str+=' '
      }
      for (let j = 0; j < row+1; j++) {
          // print stars
          str+='* '
      }
      str+='\n'
      
}
}


function pattern2(n) {
  /*
   
*********
 *******
  *****
   ***
    *
    
   */
  let str = "";
  for (let row = 1; row <= n; row++) {
    for (let j = 1; j <= row - 1; j++) {
      str += " ";
    }

    for (let j = 1; j <= 2 * (n - row) + 1; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}
function pattern3(n) {
  /*
   *
   **
   ***
   ****
   *****
   ****
   ***
   **
   *
   */
  let str = "";
  let start = 1;
  for (let row = 1; row <= 2 * n - 1; row++) {
    start = row;
    if (row > n) start = 2 * n - row;
    for (let j = 1; j <= start; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}
function pattern4(n) {
  /*
    1
    01
    101
    0101
    10101
    */
  let str = "";
  let num = 1;
  for (let row = 1; row <= n; row++) {
    if (row % 2 == 0) num = 0;
    else num = 1;
    for (let j = 1; j <= row; j++) {
      str += num;
      num = 1 - num;
    }
    str += "\n";
  }
  console.log(str);
}
function pattern5(n) {
  /*
    1        1
    12      21
    123    321
    1234  4321
    1234554321
    */
  let str = "";

  for (let row = 1; row <= n; row++) {
    for (let j = 1; j <= row; j++) {
      str += j;
    }
    for (let space = 1; space <= 2 * (n - row); space++) {
      str += " ";
    }
    for (let j = row; j >= 1; j--) {
      str += j;
    }
    str += "\n";
  }
  console.log(str);
}
function pattern6(n) {
  /*
    1 
    2 3 
    4 5 6 
    7 8 9 10 
    11 12 13 14 15 
    */
  let str = "";
  let count = 1;
  for (let row = 1; row <= n; row++) {
    for (let j = 1; j <= row; j++) {
      str += count + " ";
      count++;
    }
    str += "\n";
  }
  console.log(str);
}
function pattern7(n) {
  /*
    A
    AB
    ABC
    ABCD
    ABCDE
    */
  let str = "";

  for (let row = 1; row <= n; row++) {
    for (let j = 1; j <= row; j++) {
      str += String.fromCharCode("A".charCodeAt(0) + j - 1);
    }
    str += "\n";
  }
  console.log(str);
}
function pattern8(n) {
  /*
    ABCDE
    ABCD
    ABC
    AB
    A
    */
  let str = "";

  for (let row = 1; row <= n; row++) {
    for (let j = 1; j <= n - row + 1; j++) {
      str += String.fromCharCode("A".charCodeAt(0) + j - 1);
    }
    str += "\n";
  }
  console.log(str);
}
function pattern9(n) {
  /*
    A
    BB
    CCC
    DDDD
    EEEEE
    */
  let str = "";

  for (let row = 1; row <= n; row++) {
    for (let j = 1; j <= row; j++) {
      str += String.fromCharCode("A".charCodeAt(0) + row - 1);
    }
    str += "\n";
  }
  console.log(str);
}
function pattern10(n) {
  /*
    E
    DE
    CDE
    BCDE
    ABCDE
    */
  let str = "";

  for (let row = 1; row <= n; row++) {
    for (let j = row; j > 0; j--) {
      str += String.fromCharCode("A".charCodeAt(0) + n - j);
    }
    str += "\n";
  }
  console.log(str);
}
function pattern11(n) {
  /*
        A
       ABA
      ABCBA
     ABCDCBA
    ABCDEDCBA
    */
  let str = "";
  let charCode = 65;
  for (let row = 1; row <= n; row++) {
    for (let space = 1; space <= n - row; space++) {
      str += " ";
    }
    for (let j = 1; j <= row; j++) {
      str += String.fromCharCode(charCode + j - 1);
    }
    for (let j = row - 1; j > 0; j--) {
      str += String.fromCharCode(charCode + j - 1);
    }
    str += "\n";
  }
  console.log(str);
}
function pattern12(n) {
  /*
   **********
   ****  ****
   ***    ***
   **      **
   *        *
   *        *
   **      **
   ***    ***
   ****  ****
   **********
   */
  let str = "";
  for (let row = 1; row <= n; row++) {
    for (let start = 1; start <= n - row + 1; start++) {
      str += "*";
    }
    for (let space = 1; space <= 2 * (row - 1); space++) {
      str += " ";
    }
    for (let start = 1; start <= n - row + 1; start++) {
      str += "*";
    }
    str += "\n";
  }

  for (let row = 1; row <= n; row++) {
    for (let start = 1; start <= row; start++) {
      str += "*";
    }
    for (let space = 1; space <= 2 * (n - row); space++) {
      str += " ";
    }
    for (let start = 1; start <= row; start++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}
function pattern13(n) {
  /*
    
    *        *
    **      **
    ***    ***
    ****  ****
    **********
    ****  ****
    ***    ***
    **      **
    *        *
    
    */
  let str = "";

  for (let row = 1; row <= n; row++) {
    for (let start = 1; start <= row; start++) {
      str += "*";
    }
    for (let space = 1; space <= 2 * (n - row); space++) {
      str += " ";
    }
    for (let start = 1; start <= row; start++) {
      str += "*";
    }
    str += "\n";
  }
  for (let row = 1; row < n; row++) {
    for (let start = 1; start <= n - row; start++) {
      str += "*";
    }
    for (let space = 1; space <= 2 * row; space++) {
      str += " ";
    }
    for (let start = 1; start <= n - row; start++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}
function pattern14(n) {
  /*
    
    *****
    *   *
    *   *
    *   *
    *****
    
    */
  let str = "";

  for (let row = 1; row <= n; row++) {
    for (let start = 1; start <= n; start++) {
      if (row == 1 || row == n || start == 1 || start == n) str += "*";
      else str += " ";
    }
    str += "\n";
  }

  console.log(str);
}
function pattern15(n) {
  /*
    4444444
    4333334
    4322234
    4321234
    4322234
    4333334
    4444444
    */
  let str = "";
  let num = n;
  for (let row = 0; row < 2 * n - 1; row++) {
    for (let start = 0; start < 2 * n - 1; start++) {
      let top = row;
      let left = start;
      let right = 2 * n - 2 - start;
      let bottom = 2 * n - 2 - row;
      str += n - Math.min(Math.min(top, left), Math.min(right, bottom)) + " ";
    }
    str += "\n";
  }

  console.log(str);
}
