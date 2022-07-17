/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals = intervals.filter((int)=> {
        if(!(int[1]<newInterval[0] || int[0]>newInterval[1])) {
            newInterval[0] = Math.min(newInterval[0], int[0]);
            newInterval[1] = Math.max(newInterval[1], int[1]);
            return false;
        }
        return true;
    });
    intervals.push(newInterval);
    let newInd = intervals.length-1;
    for(let i=intervals.length-1; i>=0; i--) {
        if(intervals[i][0] > intervals[newInd][0]) {
            intervals[i][0] = intervals[newInd][0]^intervals[i][0];
            intervals[newInd][0] = intervals[newInd][0]^intervals[i][0];
            intervals[i][0] = intervals[newInd][0]^intervals[i][0];
            intervals[i][1] = intervals[newInd][1]^intervals[i][1];
            intervals[newInd][1] = intervals[newInd][1]^intervals[i][1];
            intervals[i][1] = intervals[newInd][1]^intervals[i][1];
            newInd = i;
        }
    }
    return intervals;
};