// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.



function isLucky(n) {
    
      var left = 0;
      var right = 0;
      n = n.toString().split("");
      console.log(n);
      if(n.length % 2 !== 0){
        return false;
      }
      for(var i=0, j=n.length-1; i<=n.length/2, j>=n.length/2; i++, j--){
        left += parseInt(n[i]);
        right += parseInt(n[j]);
      }
      if(left === right){
        return true;
      }
      return false;
     
    }
    
    console.log(isLucky(1230));
    