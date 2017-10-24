function allLongestStrings(inputArray) {
    var newAr = [];
    var max =0;
    
    for(var i=0; i<inputArray.length; i++){
      if(inputArray[i].length >= max){
        max = inputArray[i].length;
      }
    }
    for(var i =0; i<inputArray.length; i++){
      if(inputArray[i].length === max){
        newAr.push(inputArray[i]);
      }
    }
    return newAr;
  }
