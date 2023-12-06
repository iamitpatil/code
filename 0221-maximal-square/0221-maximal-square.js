/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let currRow, prevRow;
    let max = 0;
    for(let i=0; i<matrix.length; i++) {
        currRow = [];
        for(let j=0; j< matrix[0].length; j++) {
            if(matrix[i][j] == "1") {
                if(i==0 || j==0) {
                    currRow.push(1);
                } 
                else {
                    currRow.push(Math.min(prevRow[j-1], prevRow[j], currRow[j-1]) + 1);
                }
            }
            else {
                currRow.push(0);
            }
            max = Math.max(max, currRow[j]);
        }
        prevRow = currRow;
    }
    return max*max;
};