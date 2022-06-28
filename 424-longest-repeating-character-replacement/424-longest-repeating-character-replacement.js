/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let start = 0, res = 0;
    let map = new Map(), maxf=0;
    for(let i=0; i<s.length; i++) {
        map.set(s[i], map.has(s[i]) ? map.get(s[i])+1:1);
        maxf = Math.max(map.get(s[i]), maxf);
        while((i-start+1) - maxf > k) {
            map.set(s[start], map.get(s[start])-1);
            start++;
        }
        res = Math.max(i-start+1,res);
    }
    return res;
};