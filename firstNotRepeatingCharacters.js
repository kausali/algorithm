//Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.



function firstNotRepeatingCharacter(s){
    var obj ={};
    for(var i=0; i<s.length; i++){
      if(!obj[s[i]]){
        obj[s[i]] =1;
      }
      else{
            obj[s[i]] +=1;
      }
    }
    for(var j in obj){
      if(obj[j] === 1){
        return j;
      }
    }
    return "_";
    
  }