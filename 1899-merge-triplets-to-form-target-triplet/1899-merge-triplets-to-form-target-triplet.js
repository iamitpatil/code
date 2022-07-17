/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    let res = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    for(let i=0; i<triplets.length; i++) {
        if(triplets[i][0] <= target[0] && triplets[i][1] <= target[1] && 
           triplets[i][2] <= target[2] ) {
            res[0] = Math.max(res[0], triplets[i][0]);
            res[1] = Math.max(res[1], triplets[i][1]);
            res[2] = Math.max(res[2], triplets[i][2]);
        }
        if(res[0]==target[0] && res[1]==target[1] && res[2]==target[2]) {
            return true;
        }
    }
    return false;
};