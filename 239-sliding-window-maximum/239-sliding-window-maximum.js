/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let result = [], l=0, queue=[], head = 0;
    for(let i=0; i<nums.length; i++) {
        while((queue.length-head) && nums[queue[queue.length-1]] < nums[i]) {
            queue.pop();
        }
        queue.push(i);
        if(l>queue[head]) {
            head++;
        }
        if(i+1>=k) {
            result.push(nums[queue[head]]);
            l++;
        }
    }
    return result;
};