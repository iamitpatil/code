/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l=0, r=nums.length-1, mid;
    while(l<=r) {
        mid = l+Math.floor((r-l)/2);
        if(target == nums[mid]) return mid;
        if(nums[mid]>=nums[l]) {
            //we are in left sorted array
            if(target < nums[l] || target > nums[mid]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        } else {
            //we are in right sorted array
            if(target > nums[r] || target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
    }
    return -1;
};