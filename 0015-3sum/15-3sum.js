/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let array = [];
    nums.sort((a,b) => a-b);
    for(let i=0; i<nums.length; i++) {
        if(i>0 && nums[i] === nums[i-1]) {
            continue;
        }
        let start = i+1;
        let end = nums.length-1;
        while(start<end) {
            let sum = nums[i] + nums[start] + nums[end];
            if(sum > 0) {
                end--;
            }
            else if(sum < 0) {
                start++;
            }
            else {
                array.push([nums[i], nums[start], nums[end]]);
                start++;
                while((nums[start] === nums[start-1]) && (start<end)) {
                    start++;
                } 
            }
        }
    }
    return array;
};