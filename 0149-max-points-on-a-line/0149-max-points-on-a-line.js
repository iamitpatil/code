/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let max = 1;
    let dp = new Array(points.length).fill(null).map(() => new Array(points.length).fill());
    for(let i=0; i< points.length; i++) {
        for(let j=i+1; j<points.length; j++) {
            if(dp[j][i]) dp[i][j] = -dp[j][i];
            dp[i][j] = points[i][0]*points[j][1] - points[j][0]*points[i][1];
            dp[j][i] = -dp[i][j];
        }
    }
    for(let i=0; i< points.length; i++) {
        for(let j=i+1; j<points.length; j++) {
            let pts = 0;
            for(let k = j+1; k< points.length; k++) {
                if(dp[i][j] + dp[j][k] + dp[k][i] == 0) {
                    pts++;
                }
            }
            max = Math.max(pts+2, max);
        }
    }
    return max;
};