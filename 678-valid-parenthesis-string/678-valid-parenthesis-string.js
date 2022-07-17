/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let stack = [], lmin=0, lmax=0;
    for(let i=0; i<s.length; i++) {
        if(s[i]=='(') lmin++, lmax++;
        else if(s[i] == ')') lmin--,lmax--;
        else lmin--, lmax++;
        if(lmax<0) return false;
        if(lmin<0) lmin=0;
    }
    return lmin == 0;
};