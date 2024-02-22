/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var heapify = function(array, i) {
    let root = i, left = 2*i+1, right = 2*i+2;
    if(array.length>left && array[root]<array[left]) root = left;
    if(array.length>right && array[root]<array[right]) root = right;
    if(i!=root) {
        let temp = array[root];
        array[root] = array[i];
        array[i] = temp;
        return heapify(array, root);
    }
    return array;
}

var findKthLargest = function(nums, k) {
    for(let i=Math.floor(nums.length/2)-1; i>=0; i--) {
        nums = heapify(nums, i);
    }
    while(k>1) {
        nums[0] = nums.pop();
        nums = heapify(nums, 0);
        k--;
    }
    return nums && nums.length ? nums[0]: null;
};