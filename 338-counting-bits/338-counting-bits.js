/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = new Array(n+1).fill(0), pow2=1;
    for(let i=1; i<n+1; i++) {
        if(i==pow2*2) pow2 = pow2*2;
        result[i]= 1+ (((i-pow2)>=0) ? result[i-pow2] :0);
    }
    return result;
};