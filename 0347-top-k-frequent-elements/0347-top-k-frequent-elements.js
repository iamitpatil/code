/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    for(let i=0; i<nums.length; i++) {
        map.has(nums[i]) ?
            map.set(nums[i], map.get(nums[i])+1):
            map.set(nums[i], 1);
    }
    
    let array = new Array(nums.length);
    for(const [key, value] of map.entries()) {
        array[value-1] ?
            array[value-1].push(key):
            (array[value-1]=[key]);
    }
    let result=[], j=array.length-1;
    while(result.length < k) {
        array[j] ? result.push(...array[j]): undefined;
        j = j-1;
    }
    return result;
};