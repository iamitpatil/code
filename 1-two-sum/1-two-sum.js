/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let size = nums.length;
    let map = new Map();
    for(let i = 0; i < size; i++) {
        let required = target - nums[i];
        if(map.has(required)) {
            return [map.get(required), i]
        }
        map.set(nums[i], i);
    }
};


