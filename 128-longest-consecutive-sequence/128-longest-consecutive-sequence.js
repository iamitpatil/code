/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = new Set();
    let longest = 0;
    for(let i=0; i<nums.length; i++) {
        map.add(nums[i]);
    }
    for(let i=0; i<nums.length; i++) {
        let strlen = 0;
        if(!map.has(nums[i]-1)) {
            while(map.has(nums[i]+strlen)) {
                strlen++;
            }
            longest = strlen > longest ? strlen: longest;
        }
    }
    return longest;
};
