// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.


function makeArrayConsecutive2(statues) {
    statues.sort(function(a, b) { return a - b;
                                });
      var total =0;
      for(var i=0; i<statues.length-1; i++){
          if(statues[i+1] - statues[i] != 1){
              total += (statues[i+1] - statues[i])-1;//3
          }
      }
    return total;
  }
  