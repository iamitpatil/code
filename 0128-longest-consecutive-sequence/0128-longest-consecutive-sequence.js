/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let longest = 0;
    for(let i=0; i<nums.length; i++) {
        let strlen = 0;
        if(!set.has(nums[i]-1)) {
            while(set.has(nums[i]+strlen)) {
                strlen++;
            }
            longest = strlen > longest ? strlen: longest;
        }
    }
    return longest;
};
