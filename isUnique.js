function isuniqe(mystr){
    var myObj = {};
    for (var i =0; i<mystr.length; i++){
      if(!myObj[mystr[i]]){
        myObj[mystr[i]] = 1;
      }
      else{
        return false;
      }
    }
    return true;
  }
  
  console.log(isuniqe("asdfghjkl/']-"));