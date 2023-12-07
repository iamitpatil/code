/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function(coins, target) {
    coins = coins.sort((a,b) => a-b);
    let obt = 0,  added = 0;
    for(let coin of coins) {
        while(coin > obt+1) {
            added++;
            let newCoin = obt+1;
            obt += newCoin;
            if(obt >= target) return added;
        }
        obt += coin;
        if(obt >= target) return added;
    }
    while(obt < target) {
        added++;
        let newCoin = obt+1;
        obt += newCoin;
    }
    return added;
};
//[1, 4,  10]       19
// coin     obt     next      added
//  1       1        1          
//  1       1        4          1
//. 4       2        10         