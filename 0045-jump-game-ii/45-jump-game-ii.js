/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let l =0, r = 0, currMax = 0, jumps=0;
    while(r < nums.length-1) {
        currMax = 0;
        for(let i=l ; i<r+1; i++) currMax = Math.max(currMax, i+ nums[i]);
        l=r+1;
        r=currMax;
        jumps++;
    }
    return jumps;
};