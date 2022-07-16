/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let dp = new Map();
    let dfs = (i, sum) => {
        if(i>=nums.length) {
            return sum == 0 ? 1: 0;
        }
        if(dp.has(`${i}->${sum}`)) return dp.get(`${i}->${sum}`);
        let l = dfs(i+1, sum-nums[i]);
        let r = dfs(i+1, sum+nums[i]);
        dp.set(`${i}->${sum}`, l+r);
        return l+r;
    };
    return dfs(0, target);
};