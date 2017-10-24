function firstDuplicate(a){
    var myObj ={};
    
    for(var i=0; i<a.length; i++){
      if(!myObj[a[i]]){
        myObj[a[i]] =1;
      }
      else{
        return a[i];
      }
    }
    return -1;
  }