//string repeat
function repeatStr (n, s) {
    if (n == 1) 
         return s;
     else
         return s.concat(repeatStr(n - 1, s))
  }