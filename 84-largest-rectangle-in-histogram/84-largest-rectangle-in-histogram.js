/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let max = 0, stack = [];
    for(let i=0; i<heights.length; i++) {
        let current = [i, heights[i]];
        if(stack.length && heights[i]<stack.at(-1)[1]) {
            while(stack.length && stack.at(-1)[1] > heights[i]) {
                let top = stack.at(-1);
                max = Math.max(max, (i-top[0])*top[1], (i-top[0]+1)*heights[i]);
                current[0] = stack.pop()[0];
            }
        }
        stack.push(current);
    }
    while(stack.length) {
        let top = stack.at(-1);
        max = Math.max(max, (heights.length-top[0])*top[1]);
        stack.pop();
    }
    return max;
};