// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".


function commonCharacterCount(s1, s2) {
    var count = 0;
    var myObj = {};
    for(var i=0; i<s1.length; i++){
      if(!myObj[s1[i]]){
        myObj[s1[i]] =1;
      }
      else{
        myObj[s1[i]]+=1;
      }
    }
    
    for(i=0; i<s2.length; i++){
      if(myObj[s2[i]]){
        if(myObj[s2[i]] -1 >=0){
          count++;
          myObj[s2[i]]--;
        }
      }
    }
    return count;
  }