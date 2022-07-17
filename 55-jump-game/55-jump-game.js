/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0;
    for(let i=0; i<nums.length; i++) {
        max = Math.max(i+nums[i], max);
        if(max==i && i!=nums.length-1) return false;
    }
    return true;
};