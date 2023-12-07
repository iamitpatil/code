/**
 * @param {number[][]} points
 * @return {number}
 */
// O(n^3) solution still faster
var maxPoints = function(points) {
    let max = 1;
    for(let i=0; i< points.length; i++) {
        for(let j=i+1; j<points.length; j++) {
            let pts = 2;
            for(let k = j+1; k< points.length; k++) {
                if(
                    points[i][0]*points[j][1] - points[j][0] * points[i][1] + 
                    points[j][0]*points[k][1] - points[k][0] * points[j][1] + 
                    points[k][0]*points[i][1] - points[i][0] * points[k][1] == 0) {
                    pts++;
                }
            }
            max = Math.max(pts, max);
        }
    }
    return max;
};

// var maxPoints = function(points) {
//     let max = 1, map = {};
//     for(let i=0; i< points.length-1; i++) {
//         for(let j=i+1; j< points.length; j++) {
//             let slope = (points[j][0] - points[i][0]) !== 0 ? 
//                 ((points[j][1] - points[i][1])/(points[j][0]-points[i][0])):
//                 "inf";
//             let c = slope != "inf" ? (points[i][1] - (slope*points[i][0])): points[i][0];
//             if(!(slope in map && c in map[slope])) {
//                 map[slope] = (map[slope] || {});
//                 map[slope][c] = new Set();
//             }
//             map[slope][c].add(i);
//             map[slope][c].add(j);
//             max = Math.max(map[slope][c].size, max);
//         }
//     }
//     return max;
// }
