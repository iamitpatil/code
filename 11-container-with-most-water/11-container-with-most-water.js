/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0;
    let start = 0;
    let end = height.length -1;
    while(end>start) {
        let volume = Math.min(height[start], height[end]) * (end-start);
        if(maxWater<volume)
            maxWater = volume;
        if(height[start] > height[end])
            end--;
        else if(height[end] > height[start])
            start++;
        else
            start++;
    }
    return maxWater;
};