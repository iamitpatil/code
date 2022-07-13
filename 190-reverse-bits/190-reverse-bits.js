/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let num=0;
    n = n;
    for(let i=0; i<32; i++) {
        num = num + (n%2);
        if(i!=31) num = num << 1;
        n = n>>>1;
    }
    return num>>>0;
};