/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let answer = new Array(nums.length).fill(1);
    let right = 1;
    let answerR = new Array(nums.length).fill(1);
    for(let i=1; i<nums.length; i++) {
        answer[i] = answer[i-1]*nums[i-1];
    }
    for(let i=nums.length-2; i>=0; i--) {
        answer[i] = right*nums[i+1]*answer[i];
        right = right*nums[i+1];
    }
    return answer;
};
