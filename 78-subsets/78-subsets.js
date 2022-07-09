/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function(nums) {
    let result = [], a=[];
    let generate = (i) => {
        if(i==nums.length) {
            result.push([...a]);
            return;
        }
        generate(i+1);
        a.push(nums[i]);
        generate(i+1);
        a.pop();
    }
    generate(0);
    return result;
};