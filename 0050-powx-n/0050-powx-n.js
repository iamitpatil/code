/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let a = new Map();
    a.set(1, x);
    a.set(0, 1);
    a.set(-1, 1/x);
    let calculate = (num, pow) => {
        if(a.has(pow)) return a.get(pow);
        let k = Math.floor(pow/2);
        a.set(k, calculate(num, k));
        a.set(pow-k, calculate(num, pow-k));
        return  a.get(k) * a.get(pow-k);
    }
    return calculate(x, n);
};