/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let waterTrapped = 0;
    let L=0, R=(height.length-1), maxL = height[L], maxR = height[R];
    while(R>L) {
        if(height[L] <= height[R]) {
            L++;
            maxL = Math.max(height[L], maxL);
            if(Math.min(maxR, maxL) - height[L] > 0)
                waterTrapped = waterTrapped + (Math.min(maxR, maxL)-height[L]);
        }
        else {
            R--;
            maxR = Math.max(height[R], maxR);
            if(Math.min(maxR, maxL) - height[R] > 0)
                waterTrapped = waterTrapped + (Math.min(maxR, maxL)-height[R]);
        }
    }
    return waterTrapped;
};