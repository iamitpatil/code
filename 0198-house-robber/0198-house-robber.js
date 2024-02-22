/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = new Array(nums.length).fill(0), i= nums.length-1;
    while(i>=0) {
        if(i==nums.length-1) dp[i] = nums[i];
        else if(i==nums.length-2) dp[i] = Math.max(dp[i+1], nums[i]);
        else {
            dp[i] = Math.max(nums.length>=2 ? dp[i+2] + nums[i]: nums[i], dp[i+1]);
        }
        i--;
    }
    return dp[0];
};