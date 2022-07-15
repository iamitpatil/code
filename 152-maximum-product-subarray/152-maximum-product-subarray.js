/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max=1, min=1, temp, res=Math.min(...nums);
    for(let i=0; i<nums.length; i++) {
        temp = max*nums[i];
        max = Math.max(temp, nums[i]*min, nums[i]);
        min = Math.min(temp, nums[i]*min, nums[i]);
        res = Math.max(max, res);
    }
    return res;
};