/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    if(len1>len2) return findMedianSortedArrays(nums2, nums1);
    let totalSize = (len1 + len2);
    let start = 0, end = len1;
    while(start <= end) {
    
        let cut1 = (end+start)>>1;
        let cut2 = Math.floor((len1+len2+1)/2) - cut1;
        
        let left1 = cut1 == 0 ? Number.MIN_SAFE_INTEGER: nums1[cut1-1];
        let left2 = cut2 == 0 ? Number.MIN_SAFE_INTEGER: nums2[cut2-1];
        
        let right1 = cut1 == len1 ? Number.MAX_SAFE_INTEGER: nums1[cut1];
        let right2 = cut2 == len2 ? Number.MAX_SAFE_INTEGER: nums2[cut2];
        
        if(left2 <= right1 && right2 >= left1) {
            if(((len1+len2)%2) == 0 )
                return (Math.max(left1, left2) + Math.min(right1, right2))/2;
            else
                return Math.max(left1, left2);
        }
        else if(left1 > right2) {
            end = cut1 - 1;
        }
        else {
            start = cut1 + 1;
        }
    }
    return 0.0;
};