/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfGoodPartitions = function(nums) {
    let map = new Map(), next = 0, count = 1, n=1e9+7;
    for(let j=0; j<nums.length; j++) map.set(nums[j], j);
    for(let i=0; i<nums.length; i++) {
        if(i > next) {
            count = (count*2) % n;
        }
        next = Math.max(next, map.get(nums[i]));
    }
    return count;
};