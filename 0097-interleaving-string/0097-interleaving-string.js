/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(s1.length+s2.length != s3.length) return false;
    let map = new Map();
    // dfs solution with caching
    let dfs = (i, j) => {
        if(i==s1.length && j==s2.length) return true;
        if(map.has(`${i}->${j}`)) return map.get(`${i}->${j}`);
        if(i<s1.length && s1[i]==s3[i+j] && dfs(i+1, j))
            return true;
        if(j<s2.length && s2[j]==s3[i+j] && dfs(i, j+1))
            return true;
        map.set(`${i}->${j}`, false);
        return false;
    };
    return dfs(0, 0);
    
    //dp solution
    // for(let i=s1.length; i>=0; i--) map.set(`${i}->${s2.length}`, false);
    // for(let j=s2.length; j>=0; j--) map.set(`${s1.length}->${j}`, false);
    // map.set(`${s1.length}->${s2.length}`, true);
    // for(let i=s1.length; i>=0; i--) {
    //     for(let j=s2.length; j>=0; j--) {
    //         if(i<s1.length && s1[i]==s3[i+j] && map.get(`${i+1}->${j}`))
    //             map.set(`${i}->${j}`,true);
    //         if(j<s2.length && s2[j]==s3[i+j] && map.get(`${i}->${j+1}`)) 
    //             map.set(`${i}->${j}`,true);
    //         if(!map.has(`${i}->${j}`)) map.set(`${i}->${j}`, false);
    //     }
    // }
    // return map.get(`${0}->${0}`);
};