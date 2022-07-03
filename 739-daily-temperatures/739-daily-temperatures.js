/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0), stack = [];
    for(let i=0; i<temperatures.length; i++) {
        while(stack.length && temperatures[stack[stack.length-1]] < temperatures[i]) {
            let ind = stack.pop();
            result[ind] = i-ind;
        }
        stack.push(i);
    }
    return result;
};