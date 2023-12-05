/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let height = triangle.length;
    let dp = [], minimum;
    for(let i=0; i< height; i++) {
        dp.push([]);
        minimum = Number.MAX_VALUE;
        for(let j=0; j< triangle[i].length; j++) {
            if(i==0 && j==0) {
                dp[i].push(triangle[i][j]);
            } 
            else {
                dp[i].push(
                    Math.min(
                        j<triangle[i-1].length ? 
                            dp[i-1][j] + triangle[i][j]:
                            dp[i-1][j-1] + triangle[i][j], 
                        j>0 ? 
                            dp[i-1][j-1] + triangle[i][j]:
                            dp[i-1][j] + triangle[i][j]
                    )
                );
            }
            minimum = Math.min(dp[i][j], minimum);
        }
    }
    return minimum;
};