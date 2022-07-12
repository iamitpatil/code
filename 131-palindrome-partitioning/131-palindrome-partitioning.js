/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let a = [], result=[];
    let isPalindrome = (i, j) => {
        if(i==j) return true;
        while(i<j) {
            if(s[i] == s[j]){
                i++, j--;
            } else {
                return false;
            }
        }
        return true;
    };
    let createPartitions = (a, i) => {
        if(i+1>s.length) {
            result.push([...a]);
            return;
        }
        let ss = "";
        for(let k=i; k<s.length; k++) {
            ss=ss+s[k];
            if(isPalindrome(i, k)) {
                a.push(ss);
                createPartitions(a,k+1);
                a.pop();
            }
        }
        return;
    }
    createPartitions(a, 0);
    return result;
};
