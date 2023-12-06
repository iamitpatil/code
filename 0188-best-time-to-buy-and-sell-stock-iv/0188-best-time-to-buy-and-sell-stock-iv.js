/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    let h = prices.length;
    let dp = new Array(h).fill(null)
        .map(() => new Array(2).fill(null)
             .map(() => new Array(k+1).fill(-1)));
    let calculateMaxProfit = (i, isHeld, trx) => {
        if(trx==0 || i==h) {
            return 0;
        }
        if(dp[i][isHeld][trx] != -1) {
            return dp[i][isHeld][trx];
        }
        //skip
        let result = calculateMaxProfit(i+1, isHeld, trx);
        if(isHeld) {
            //sell
            result = Math.max(result, calculateMaxProfit(i+1, 0, trx-1) + prices[i]);
        } 
        else {
            //buy
            result = Math.max(result, calculateMaxProfit(i+1, 1, trx) - prices[i]);
        }
        dp[i][isHeld][trx] = result;
        return result;
    }
    return calculateMaxProfit(0, 0, k);
};