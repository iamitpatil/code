/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let dp = new Array(grid.length)
    .fill(new Array(grid[0].length)
          .fill(Number.MAX_VALUE));
    for(let i=0; i< grid.length; i++) {
        for(let j=0; j<grid[i].length; j++) {
            if(i==0 && j==0) {
                dp[i][j] = grid[i][j];
            }
            else {
                dp[i][j] = Math.min( 
                    i>0 ? dp[i-1][j]: dp[i][j],
                    j>0 ? dp[i][j-1]: dp[i][j]
                ) + grid[i][j];
            }
        }
    }
    return dp[grid.length-1][grid[0].length-1];
};