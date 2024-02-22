/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let lis=new Array(nums.length).fill(1), max=0;
    for(let i=nums.length-1; i>=0; i--) {
        for(let k=i+1; k<nums.length; k++) {
            if(nums[k]>nums[i]) {
                lis[i] = Math.max(lis[k]+1, lis[i]);
            }
        }
        max = Math.max(max, lis[i]);
    }
    return max;
};