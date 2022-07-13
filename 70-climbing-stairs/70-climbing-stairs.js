/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let i=n-3, one=1, two=2, curr=0;
    if(n==1) return one;
    else if(n==2) return two;
    while(i>=0) {
        curr = one + two;
        one = two;
        two = curr;
        i--;
    }
    return two;
};