/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let prices = new Array(n).fill(Number.POSITIVE_INFINITY);
    let tempP = [...prices];
    prices[src] = 0;
    tempP[src] = 0;
    for(let i=k+1; i>0; i--) {
        flights
            .forEach((f) => {
                tempP[f[1]] = Math.min(prices[f[0]]+f[2], prices[f[1]], tempP[f[1]]);
            });
        prices = [...tempP];
    }
    return prices[dst] == Number.POSITIVE_INFINITY ? -1: prices[dst];
};