/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length) return false;
    let map = new Map();
    for(let i=0; i<=t.length; i++) {
        if(map.has(t[i])) {
            map.set(t[i], map.get(t[i])+1);
        } else {
            map.set(t[i], 1);
        }
    }
    for(let i=0; i<=s.length; i++) {
        if(map.has(s[i])) {
            if(map.get(s[i])>1)
                map.set(s[i], map.get(s[i])-1);
            else
                map.delete(s[i]);
        }
        else {
            return false
        }
    }
    return true;
};
