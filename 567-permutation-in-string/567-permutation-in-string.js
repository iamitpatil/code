/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let map = new Map(), found = new Map(), matched = 0;
    if(s1.length > s2.length)
        return false;
    for(let i=0; i<s1.length; i++) {
        map.set(s1[i], map.has(s1[i]) ? map.get(s1[i])+1: 1);
        found.set(s2[i], found.has(s2[i]) ? found.get(s2[i])+1: 1);
    }
    map.forEach((value, key) => value == found.get(key) ? matched++: undefined);
    for(let i=s1.length; i<s2.length; i++) {
        if(matched == map.size) return true;
        if(map.has(s2[i-s1.length]) && map.get(s2[i-s1.length]) == found.get(s2[i-s1.length]))
            matched--;
        if(map.has(s2[i]) && map.get(s2[i]) == found.get(s2[i]))
            matched--;
        found.set(s2[i], found.has(s2[i]) ? found.get(s2[i])+1: 1);
        found.get(s2[i-s1.length]) > 1 ?
            found.set(s2[i-s1.length], found.get(s2[i-s1.length])-1):
            found.delete(s2[i-s1.length]);
        if(map.has(s2[i-s1.length]) && map.get(s2[i-s1.length]) == found.get(s2[i-s1.length]))
            matched++;
        if(map.has(s2[i]) && map.get(s2[i]) == found.get(s2[i]))
            matched++;
    }
    if(matched == map.size) return true;
    return false;
};