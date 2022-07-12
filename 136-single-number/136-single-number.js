/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let num=nums[0];
    for(let i=1; i<nums.length; i++) {
        num=num^nums[i];
    }
    return num;
};