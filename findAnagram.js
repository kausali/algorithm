

function findAnagram (string1, string2){
    
    string1 = string1.toLowerCase().split("").sort().join();
    string2 = string2.toLowerCase().split("").sort().join();
    
    if(string1 == string2){
      return true;
    }
    return false;
  }


  //better approach

  function findAnagram(str1, str2){
    var myObj = {};
    if(str1.length != str2.length){
      return false;
    }
    for (var i=0; i<str1.length; i++){
      if(!myObj[str1[i]]){
        myObj[str1[i]] = 1;
      }
      else{
        myObj[str1[i]] +=1;
      }
    }
    for(var i = 0; i<str2.length; i++){
      if(myObj[str2[i]]){
         myObj[str2[i]] -=1;
      }
      else{
        return false;
      }
    }
    
   for(var x in myObj){
     if(myObj[x] !== 0){
       return false;
     }
   }
    return true;
    
  }
  


  
  
  