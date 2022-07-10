/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [], a=[];
    candidates = candidates.sort((a,b) => a-b);
    let sumSet = (sum, j, a) => {
        if(sum == target) {
            result.push([...a]);
            return;
        } else if(sum > target) {
            return;
        }
        let prev = -1;
        for(let i=j; i<candidates.length; i++) {
            if(prev == candidates[i]) continue;
            a.push(candidates[i]);
            sumSet(sum + candidates[i], i+1, a);
            a.pop();
            prev = candidates[i];
        }
    };
    sumSet(0, 0, a);
    return result;
};