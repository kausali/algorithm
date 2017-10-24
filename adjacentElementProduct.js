function adjacentElementsProduct(inputArray) {
    var product = 0;
    
    for(var i=0; i<inputArray.length-1; i++){
      if(inputArray[i]*inputArray[i+1] > product){
        product = inputArray[i]*inputArray[i+1];
      }
    }
    return product;
     
  }