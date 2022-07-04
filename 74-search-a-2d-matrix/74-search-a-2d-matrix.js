/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rowLength = matrix[0].length, 
        noRows = matrix.length, 
        arrayLength = noRows*rowLength,
        l=0, r=arrayLength-1, mid, midValue;
    while(r>=l) {
        mid = l + Math.floor((r-l)/2);
        midValue = matrix[Math.floor(mid/rowLength)][mid-Math.floor(mid/rowLength)*rowLength];
        if(target == midValue) return true;
        if(target < midValue) r=mid-1; else l=mid+1;
    }
    return false;
};