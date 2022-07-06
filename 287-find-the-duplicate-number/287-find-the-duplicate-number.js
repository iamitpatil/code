/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let fp = 0, sp = 0;
    while(true) {
        fp = nums[nums[fp]];
        sp = nums[sp];
        if(fp == sp) break;
    }
    fp = 0;
    while(true) {
        fp = nums[fp];
        sp = nums[sp];
        if(fp == sp) break;
    }
    return fp;
};