/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = new Array(coins.length+1).fill(0).map(() => new Array(amount+1).fill(0));
    for(let amt=1; amt<amount+1; amt++) {
        for(let i=0; i<coins.length; i++) {
            dp[i+1][amt] = (amt%coins[i] == 0 ? 1: 0);
            for(let k=0; k<Math.ceil(amt/coins[i]); k++) 
                dp[i+1][amt] += dp[i][amt-k*coins[i]];
        }
    }
    return amount>0 ? dp[coins.length][amount]: 1;
};