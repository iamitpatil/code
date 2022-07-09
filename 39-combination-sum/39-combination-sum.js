/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [], a=[];
    let search = (sum, j) => {
        if(sum==target) {
            result.push([...a]);
            return;
        } 
        else if(sum>target) {
            return;
        }
        for(let i=j; i<candidates.length; i++)  {
            a.push(candidates[i]);
            search(sum+candidates[i], i);
            a.pop();
        }
    }
    search(0, 0);
    return result;
};