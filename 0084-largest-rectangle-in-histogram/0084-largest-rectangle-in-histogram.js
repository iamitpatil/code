/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let max = 0, stack = [], start=0;
    for(let i=0; i<heights.length; i++) {
        start = i;
        while(stack.length && stack.at(-1)[1] > heights[i]) {
            max = Math.max(max, (i-stack.at(-1)[0])*stack.at(-1)[1]);
            start = stack.pop()[0];
        }
        stack.push([start, heights[i]]);
    }
    while(stack.length) {
        let top = stack.at(-1);
        max = Math.max(max, (heights.length-top[0])*top[1]);
        stack.pop();
    }
    return max;
};