/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ones=0;
    while(n>0) {
        if(n%2==1) ones++;
        n=n>>>1;
    }
    return ones;
};