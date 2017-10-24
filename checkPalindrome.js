//approach 1

function checkPalindrome(inputString) {  
  var myStr = inputString.split("").reverse().join("");
  if(myStr === inputString){
    return true;
  }
  return false; 

}


//approach 2

function checkPalindrome(inputString) {  
    
    for(var i=0, j =inputString.length-1; i <j; i++, j--){
      if(inputString[i] != inputString[j]){
        return false;
      }
    }
    return true;
  }


