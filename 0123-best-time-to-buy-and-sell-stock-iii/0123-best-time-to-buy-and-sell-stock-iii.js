/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp = new Array(prices.length)
    .fill(null)
    .map(() => new Array(2)
         .fill(null)
         .map(() => new Array(3).fill(-1))
        );
    let findMaxProfitWithDP = (i, isHeld, trx) => {
        if(i>prices.length-1 || trx == 0) {
            return 0;
        }
        if(dp[i][isHeld][trx] != -1) {
            return dp[i][isHeld][trx];
        }
        //3 choices buy sell skip
        //skip
        let result = findMaxProfitWithDP(i+1, isHeld, trx);
        if(isHeld) {
            //sell
           result = Math.max(result, findMaxProfitWithDP(i+1, 0, trx-1)+prices[i]);
        } else {
            //buy
            result = Math.max(result, findMaxProfitWithDP(i+1, 1, trx)-prices[i]);
        }
        dp[i][isHeld][trx] = result;
        return result;
    }
    return findMaxProfitWithDP(0, 0, 2);
};