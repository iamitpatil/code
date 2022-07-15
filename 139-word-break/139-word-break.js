/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length+1).fill(0);
    dp[s.length] = 1;
    for(let i=s.length-1; i>=0; i--) {
        for(let j=0; j<wordDict.length; j++) {
            if(i+wordDict[j].length <=s.length && 
               wordDict[j] == s.slice(i, i+wordDict[j].length)) {
                dp[i]=dp[i+wordDict[j].length];
            }
            if(dp[i]) break;
        }
    }
    return dp[0] ? true: false;
};