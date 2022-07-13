/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let res = 0;
    for(let i=0; i<nums.length; i++) {
        res = res^(i+1)^nums[i];
    }
    return res;
};