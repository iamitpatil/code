/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let set = new Set(), map = new Map(), res = [], count=0;
    for(let i=0; i<s.length; i++) {
        if(map.has(s[i])) map.set(s[i], map.get(s[i])+1);
        else map.set(s[i], 1);
    }
    for(let i=0; i<s.length; i++) {
        set.add(s[i]);
        count++;
        if(map.get(s[i]) == 1) {
            map.delete(s[i]);
            let isCharsDone = true;
            set.forEach((val) => isCharsDone = ((!map.has(val)) && isCharsDone));
            if(isCharsDone) {
                set = new Set();
                res.push(count);
                count=0;
            }
        } else {
            map.set(s[i], map.get(s[i])-1);
        }
    }
    return res;
};