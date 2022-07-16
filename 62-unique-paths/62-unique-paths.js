/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m).fill(0).map(()=> new Array(n).fill(0));
    for(let j=n-1; j>=0; j--) {
        for(let i=m-1; i>=0; i--) {
            if(i==m-1 && j==n-1) {
                dp[i][j]=1;
                continue;
            } else {
                dp[i][j] = (i+1<=m-1 ? dp[i+1][j]: 0) + (j+1<=n-1 ? dp[i][j+1]: 0);
            }
        }
    }
    return dp[0][0];
};