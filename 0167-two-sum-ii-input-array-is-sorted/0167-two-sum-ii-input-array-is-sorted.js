/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length-1;
    while(start<end) {
        if((target-numbers[start])<numbers[end]) {
            end--;
            continue;
        }
        if((target-numbers[end])>numbers[start]) {
            start++;
            continue;
        }
        if(numbers[end] + numbers[start] == target) {
            return [start+1, end+1];
        }
    }
};