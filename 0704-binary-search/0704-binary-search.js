/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;
    while(start <= end) {
        let mid = start + Math.floor((end-start)/2);
        if(nums[mid] == target) return mid;
        (nums[mid] > target) ? (end = mid - 1) : (start = mid + 1);
    }
    return -1
};