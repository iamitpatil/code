/**
 * Time: O(n^2) Space: O(1) using sliding window with set
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    let max = 0;
    for(let i=0; i<len; i++) {
        let charset = new Set();
        for(let j=i; j<len; j++) {
            if(charset.has(s[j]))
                break;
            charset.add(s[j]);
            max = max < (j-i+1) ? (j-i+1): max;
        }
    }
    return max;
};


/**
 * Time: O(n) Space: O(d) using sliding window with Map
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
