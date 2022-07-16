/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    nums.forEach((i) => sum=sum+i);
    if(sum%2 == 1) return false;
    sum = sum/2;
    let total=0;
    let dp = new Array(nums.length).fill(0).map(()=> new Array(sum+1).fill(0));
    dp.forEach((i)=> i[0]=1);
    for(let total=0; total<=sum; total++) {
        for(let i=nums.length-1; i>=0; i--) {
            if(i==nums.length-1) {
                if(nums[i]==total) dp[i][total] = 1;
            } else if(i<nums.length-1){
                if(total>=nums[i]) dp[i][total] = dp[i+1][total-nums[i]] || dp[i+1][total];
                else dp[i][total] = dp[i+1][total];
            }
        }
    }
    return dp[0][sum] ? true: false;
};