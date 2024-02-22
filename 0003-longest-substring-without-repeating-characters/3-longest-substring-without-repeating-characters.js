/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let start = 0;
    let charset = new Map();
    for(let end=0; end<s.length; end++) {
        if(charset.has(s[end])) {
            start = Math.max(start, charset.get(s[end]) + 1);
        }
        charset.set(s[end], end);
        max = Math.max(max, (end-start+1));
    }
    return max;
};