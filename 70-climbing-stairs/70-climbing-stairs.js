/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n).fill(0), i=n-1;
    while(i>=0) {
        if(i==n-1) dp[i] = 1;
        else if(n>=2 && i==n-2) dp[i] = 2;
        else dp[i] = dp[i+1] + (n>=2 ? dp[i+2]: 0);
        i--;
    }
    return dp[0];
};