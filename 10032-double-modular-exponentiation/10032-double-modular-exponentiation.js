/**
 * @param {number[][]} variables
 * @param {number} target
 * @return {number[]}
 */
var getGoodIndices = function(variables, target) {
    let gd = [];
    let getModPower = (x, y, mod) => {
        let exp = y, pow = [];
        while(exp > 0) {
            if(exp%2 == 1) pow.push(1);
            else pow.push(0);
            exp = exp>>1;
        }
        for(let i=pow.length-1; i>=0; i--) {
            if(i == pow.length-1) {
                pow[i] = x;
            }
            else {
                if(pow[i] == 0) {
                    pow[i] = (pow[i+1]**2) % mod;
                } else {
                    pow[i] = (((pow[i+1]**2) % mod)*x) % mod;
                }
            }
        }
        return y == 1 ? x%mod : pow[0];
    };
    
    for(let i=0; i<variables.length; i++) {
        let rem1 = getModPower(variables[i][0], variables[i][1], 10);
        let ans = getModPower(rem1, variables[i][2], variables[i][3]);
        if(target == ans) {
            gd.push(i);
        }
    }
    return gd;
};