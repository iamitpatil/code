/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    let str = "";
    let backtracking = function(str = "", open = 0, close = 0) {
        if(open === close && close === n)
            result.push(str);
        if(open < n) {
            backtracking(str + "(", open + 1, close);
        }
        if(close < open) {
            backtracking(str + ")", open, close + 1);
        }
    }
    backtracking();
    return result;
};