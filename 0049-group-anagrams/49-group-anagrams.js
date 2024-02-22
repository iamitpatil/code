/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let groupedAnagrams = [];
    let maps = new Map();
    for(i=0; i< strs.length; i++) {
        let word = strs[i];
        let letterCount = new Array(26).fill(0);
        for(j=0; j < word.length; j++) {
            let letterIndex = word[j].charCodeAt() - 'a'.charCodeAt();
            letterCount[letterIndex]++;
        }
        let key = letterCount.join('-');
        maps.has(key) ? maps.get(key).push(word) : maps.set(key, [word]);
    }
    return Array.from(maps.values());
};