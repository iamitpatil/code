/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, r = nums.length -1, min = Number.POSITIVE_INFINITY, mid;
    while(r>=l) {
        mid = l + Math.floor((r-l)/2);
        min = Math.min(nums[mid], min);
        if(nums[l]<=nums[mid]) {
            //in left sorted array
            if(nums[r]<nums[l])
                l = mid + 1;
            else
                r = mid - 1; 
        }
        else {
            //in right sorted array
            if(nums[l]>nums[r]) {
                r = mid - 1;
            }
            else {
                l = mid + 1;
            }
        }
    }
    return min;
};