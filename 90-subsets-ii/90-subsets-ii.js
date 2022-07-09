/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = [], a = [];
    nums = nums.sort((a,b) => a-b);
    let generate = (i) => {
        if(i==nums.length) {
            result.push([...a]);
            return;
        }
        a.push(nums[i]);
        generate(i+1);
        a.pop();
        while(i+1<nums.length && nums[i]==nums[i+1]) {
            i++;
        }
        generate(i+1);
    }
    generate(0);
    return result;
};