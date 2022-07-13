/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let one=Number.MAX_SAFE_INTEGER, 
        two=Number.MAX_SAFE_INTEGER, 
        i=cost.length-1, temp=0;
    while(i>=0) {
        if(i==cost.length-1) one = cost[i];
        else if(cost.length>=2 && i==cost.length-2) two = cost[i];
        else {
            temp = Math.min(one+cost[i], two+cost[i]);
            one = two;
            two = temp;
        }
        i--;
    }
    return Math.min(one, two);
};