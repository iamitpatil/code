/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let m = matrix.length, n= matrix[0].length;
    let map = new Map(), result=0;
    let dfs = (i, j, last) => {
        if(i>=m || j>=n || i<0 || j<0) return 0;
        if(matrix[i][j]<=last) return 0;
        if(map.has(`${i}.${j}`)) return map.get(`${i}.${j}`);
        let max = 1 + Math.max(
            dfs(i+1,j, matrix[i][j]), 
            dfs(i,j+1, matrix[i][j]),
            dfs(i-1,j, matrix[i][j]),
            dfs(i,j-1, matrix[i][j])
        );
        map.set(`${i}.${j}`, max);
        return max;
    };
    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[0].length; j++) {
            result = Math.max(result, dfs(i,j));
        }
    }
    return result;
};