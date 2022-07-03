/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0), stack = [];
    for(let i=0; i<temperatures.length; i++) {
        while(stack.length && temperatures[stack.at(-1)] < temperatures[i]) {
            result[stack.at(-1)] = i-stack.pop();
        }
        stack.push(i);
    }
    return result;
};