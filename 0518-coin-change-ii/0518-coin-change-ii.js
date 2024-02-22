/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = new Array(coins.length).fill(0).map(() => new Array(amount+1).fill(0));
    for(let amt=0; amt<amount+1; amt++) {
        for(let i=0; i<coins.length; i++) {
            if(amt==0) {
                dp[i][amt] = 1;
                continue;
            }
            if(amt-coins[i]>=0)
                dp[i][amt] += dp[i][amt-coins[i]]; 
            if(i-1>=0)
                dp[i][amt] += dp[i-1][amt];
        }
    }
    return dp[coins.length-1][amount];
};