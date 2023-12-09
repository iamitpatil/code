/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l=0, r=x, res=0;
    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);
        if(mid*mid > x) {
            r= mid-1;
        } else if(mid*mid < x) {
            l = mid + 1;
            res = mid;
        } else {
            return mid;
        }
    }
    return res;
};