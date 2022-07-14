/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let one=0, two=0, i=s.length-1;
    while(i>=0) {
        let temp = 0;
        if(i==s.length-1) {
            if(s[i] > 0) one++;
        }
        else if(i==s.length-2) {
            if(s[i]==1 || (s[i]==2 && s[i+1] <= 6)) two = one+1;
            else if(s[i]!=0) two = one;
        }
        else {
            if(s[i] == 0) temp = 0;
            else if(s[i]+s[i+1]<=26 && s[i]+s[i+1]>=10) temp = two + one;
            else temp = two;
            one = two;
            two = temp;
        }
        i--;
    }
    return s.length == 1 ? one: two;
};