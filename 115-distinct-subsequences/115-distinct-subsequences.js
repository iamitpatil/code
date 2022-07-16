/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let dp = new Map();
    let dfs = (i, j) => {
        if(j>=t.length) return 1;
        else if(i>=s.length) return 0;
        if(dp.has(`${i}.${j}`)) return dp.get(`${i}.${j}`);
        let res;
        if(s[i]==t[j]) {
            res = dfs(i+1, j+1) + dfs(i+1, j);
        } else {
            res = dfs(i+1, j);
        }
        dp.set(`${i}.${j}`, res);
        return res;
    };
    return dfs(0, 0);
};