/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let factors = [[], []];
    for(let i=1; i <= Math.sqrt(n); i++) {
        if(n%i == 0) {
            factors[0].push(i);
            if(i != n/i) factors[1].push(n/i);
        }
    }
    console.log(factors);
    return k <= (factors[0].length + factors[1].length) ?
        (k<=factors[0].length ? factors[0][k-1]: 
         factors[1][factors[1].length - (k - factors[0].length)])
    : -1;
};