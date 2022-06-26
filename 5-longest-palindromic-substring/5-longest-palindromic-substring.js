/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
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