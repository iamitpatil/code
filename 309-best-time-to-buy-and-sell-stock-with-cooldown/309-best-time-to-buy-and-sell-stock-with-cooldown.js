/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let map = new Map();
    let dfs = (i, can_buy) => {
        if(i>=prices.length) return 0;
        if(map.has(i+can_buy)) return map.get(i+can_buy);
        let buy, cooldown, sell;
        cooldown = dfs(i+1, can_buy);
        if(can_buy == "Y") {
            buy = dfs(i+1, "N") - prices[i];
            map.set(i+can_buy, Math.max(buy, cooldown));
        } else {
            sell = dfs(i+2, "Y") + prices[i];
            map.set(i+can_buy, Math.max(sell, cooldown));
        }
        return map.get(i+can_buy);
    }

    return dfs(0, "Y");
};