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
    let findWithDivideAndConquer = () => {
        let left = new Array(prices.length).fill(null);
        let right = new Array(prices.length).fill(null);
        let lmin = Number.MAX_VALUE, rmax = Number.MIN_VALUE, maxProfit=Number.MIN_VALUE;
        for(let i=0; i<prices.length; i++) {
            if(i==0) {
                left[i] = 0;
                right[prices.length-1-i]=0;
                lmin = prices[i];
                rmax = prices[prices.length-1-i];
            } else {
                left[i] = Math.max(prices[i]-lmin, left[i-1]);
                right[prices.length-1-i] = Math.max(rmax-prices[prices.length-1-i], right[prices.length-i]);
                lmin = lmin > prices[i] ? prices[i]: lmin;
                rmax = rmax < prices[prices.length-1-i] ? prices[prices.length-1-i]: rmax;
            }
        }
        for(let i=0; i<prices.length-1; i++) {
            maxProfit = Math.max(maxProfit, left[i]+right[i+1]);
        }
        return Math.max(maxProfit, right[0]);
    };
    return findWithDivideAndConquer();
    // return findMaxProfitWithDP(0, 0, 2);
};