/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    nums.forEach((i) => sum=sum+i);
    if(sum%2 == 1) return false;
    sum = sum/2;
    let dp = new Set([0]);
    for(let i=nums.length-1; i>=0; i--) {
        let temp = new Set();
        for(let val of dp) {
            if(val+nums[i]==sum) return true;
            temp.add(val+nums[i]);
            temp.add(val);
        }
        dp = temp;
    }
    return dp.has(sum) ? true: false;
};