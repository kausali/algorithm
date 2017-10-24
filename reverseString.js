function reverseStr(mystring){
    var newString = "";
   
     var splitStr = mystring.split("");
     for (var i = splitStr.length-1; i>=0; i--){
       newString = newString.concat(splitStr[i]);
     }
    
    return newString;
  }