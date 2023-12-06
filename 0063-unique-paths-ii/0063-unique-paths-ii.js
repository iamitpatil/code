/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let dp = new Array(obstacleGrid.length)
    .fill(null)
    .map((i) => new Array(obstacleGrid[0].length).fill(0));
    for(let i=0; i<obstacleGrid.length; i++) {
        for(let j=0; j<obstacleGrid[i].length; j++) {
            if(i==0 && j==0) {
                if(!obstacleGrid[i][j]) {
                    dp[i][j] = 1;
                }
            } else {
                if(!obstacleGrid[i][j]) {
                    dp[i][j] = (i>0 ? dp[i-1][j]: 0) + (j>0 ? dp[i][j-1]: 0);
                }
            }
        }
    }
    return dp[obstacleGrid.length-1][obstacleGrid[0].length-1];
};