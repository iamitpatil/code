// var heapify = function(array, i) {
//     let n = array.length, root = i, left = 2*i+1, right = 2*i+2;
//     if(n > left && array[root] > array[left])
//         root = left;
//     if(n > right && array[root] > array[right])
//         root = right;
//     if(root != i) {
//         //swap
//         array[i] = array[root]^array[i];
//         array[root] = array[i]^array[root];
//         array[i] = array[i]^array[root];
//         //recursively heapify
//         return heapify(array,i);
//     }
//     return array;
// }


/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums;
    for(let i = Math.floor(this.nums.length/2)-1; i>=0; i--) this.heapifyDown(i);
    this.popExtras();
};

KthLargest.prototype.heapifyDown = function(i) {
    let n = this.nums.length, root = i, left = 2*i+1, right = 2*i+2;
    if(n > left && this.nums[root] > this.nums[left])
        root = left;
    if(n > right && this.nums[root] > this.nums[right])
        root = right;
    if(root !== i) {
        //swap
        this.nums[i] = this.nums[i]^this.nums[root];
        this.nums[root] = this.nums[i]^this.nums[root];
        this.nums[i] = this.nums[i]^this.nums[root];
        //recursively heapify
        this.heapifyDown(root);
    }
}

KthLargest.prototype.heapifyUp = function(i) {
    let n = this.nums.length, root = i, parent = Math.floor((i-1)/2);
    if(parent >=0 && this.nums[parent] > this.nums[root]) {
        //swap
        this.nums[parent] = this.nums[parent]^this.nums[root];
        this.nums[root] = this.nums[parent]^this.nums[root];
        this.nums[parent] = this.nums[parent]^this.nums[root];
        //recursively heapify up
        this.heapifyUp(parent);
    }
}

KthLargest.prototype.popExtras = function () {
    while(this.nums.length > this.k) {
        this.nums[0] = this.nums.pop();
        this.heapifyDown(0);
    }
}

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.nums.push(val);
    this.heapifyUp(this.nums.length-1);
    this.popExtras();
    return this.nums[0];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */