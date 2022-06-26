/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let size = s.length;
    let longest = "";
    let start = 0;
    let end = 0;
    let dp = Array.from(Array(size), async () => new Array(size).fill(0));
    for(let g=0; g<size; g++) {
        for(let i=0, j=g; j<size; i++, j++) {
            if(g==0) {
                dp[i][j] = 1;
            }
            else if(g==1) {
                if(s[i] == s[j]) dp[i][j] = 1;
            }
            else {
                if((s[i] == s[j]) && dp[i+1][j-1] == 1) dp[i][j] = 1;
            }
            if(dp[i][j]) {
                start = i;
                end = j;
            }
        }
    }    
    return s.substring(start, end+1);
}
var longestPalindrome1 = function(s) {
    let size = s.length;
    let longest = "";
    for(let i=0; i < size; i++) {
        //case 1: when its odd size string
        let j=0;
        let pd = "";
        while(i>=j && i+j < size && s[i-j] == s[i+j]) {
            if(i-j != i+j)
                pd = s[i-j] + pd + s[i+j];
            else 
                pd = s[i-j]
            j++;
        }
        if(pd.length >= longest.length)
            longest = pd
        //case 2: when its even size string
        j=0, pd = "";
        while(i>=j && i+j+1 < size && s[i-j] == s[i+j+1]) {
            pd = s[i-j] + pd + s[i+j+1];
            j++;
        }
        if(pd.length > longest.length)
            longest = pd
    }
    return longest;
};


