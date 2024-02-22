/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob = (i,j) => {
        if(i==j) return nums[i];
        else if(i>j) return 0;
        let dp = new Array(j-i+1).fill(0);
        for(let k=i; k<=j; k++) {
            if(k==i) dp[k] = nums[k];
            else if(k==i+1) dp[k] = Math.max(dp[k-1], nums[k]);
            else dp[k] = Math.max(nums[k]+dp[k-2], dp[k-1]);
        }
        return dp[j];
    }
    if(nums.length>=2) return Math.max(rob(0,nums.length-2), rob(1,nums.length-1));
    else return nums[0];
};