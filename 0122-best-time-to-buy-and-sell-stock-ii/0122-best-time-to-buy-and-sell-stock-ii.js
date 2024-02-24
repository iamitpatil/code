/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0, buy = Number.MAX_VALUE;
    for(let i=0; i<prices.length; i++) {
        if(prices[i] >= buy) {
            profit = profit + prices[i] - buy;
        }
        buy = prices[i];
    }
    return profit;
};