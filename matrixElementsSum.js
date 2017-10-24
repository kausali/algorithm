function matrixElementsSum(matrix) {
    var total = 0;
    var idx =[];
    for(var i=0; i<matrix.length; i++){
        for(var j=0; j<matrix[i].length; j++){
            if(matrix[i][j] === 0){
                idx.push(j);
            }
            else if(idx.indexOf(j) === -1){
                total += matrix[i][j];
            }
        }
    }
    return total;
}