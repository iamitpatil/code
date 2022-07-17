/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let l=0, r=0, sum=0, max=Number.MIN_SAFE_INTEGER;
    while(r>=l && r<nums.length) {
        sum += nums[r];
        if(sum>max) max = sum;
        if(sum<0) l=r+1, sum=0;
        r++;
    }
    return max;
};