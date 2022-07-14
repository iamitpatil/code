/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0)), count = 0;
    for(let l=0; l<s.length; l++) {
        for(let k=0; k+l<s.length; k++) {
            if(l==0) {
                dp[k][k+l] = 1;
                count++;
            } 
            else if(l==1) {
                if(s[k] == s[k+l]) {
                    dp[k][k+l] = 1;
                    count++;
                }
            }
            else if(s[k] == s[k+l] && dp[k+1][k+l-1]) {
                dp[k][k+l] = 1;
                count++;
            }
        }
    }
    return count;
};