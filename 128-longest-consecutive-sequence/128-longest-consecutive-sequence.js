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
        if(!map.has(nums[i]-1)) {
            let strlen = 1;
            let num = nums[i];
            while(map.has(num+1)) {
                strlen++;
                num++;
                map.delete(num);
            }
            longest = strlen > longest ? strlen: longest;
        }
    }
    return longest;
};
