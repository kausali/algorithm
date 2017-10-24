// For n = 2, the output should be
// shapeArea(n) = 5;
// For n = 3, the output should be
// shapeArea(n) = 13


function shapeArea(n) {
    var area =1;
     for(var i=1; i<n; i++){
       area += 4*i;
     }
     return area;
   }