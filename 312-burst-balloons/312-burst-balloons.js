/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    nums = [1, ...nums, 1];
    let dp = new Array(nums.length).fill(0).map(() => new Array(nums.length).fill(-1)), res;
    let dfs = (l,r) => {
        if(l>r) return 0;
        if(dp[l][r] != -1) return dp[l][r];
        for(let i=l; i<=r; i++) {
            res = nums[i]*nums[l-1]*nums[r+1];
            res += dfs(l, i-1) + dfs(i+1, r);
            dp[l][r] = Math.max(dp[l][r], res);
        }
        return dp[l][r];
    }
    return  dfs(1, nums.length-2);
};