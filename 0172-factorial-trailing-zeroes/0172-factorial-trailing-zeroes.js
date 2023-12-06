/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let twoPower=0, fivePower=0, f=n, t=n;
    while(f>1 && t>1) {
        f=f/5, t=t/2;
        fivePower += Math.floor(f);
        twoPower += Math.floor(f);
    }
    return Math.min(fivePower, twoPower);
};