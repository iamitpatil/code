/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
//O(n) solution
var canCompleteCircuit = function(gas, cost) {
    let netGas = 0, total=gas.reduce((a,b) => a+b) - cost.reduce((a,b)=> a+b), res=0;
    if(total<0) return -1;
    for(let i=0; i<gas.length; i++) {
        netGas += gas[i]-cost[i];
        if(netGas < 0) {
            netGas = 0;
            res = i+1;
        }
    }
    return res;
}

// O(n2)
// var canCompleteCircuit = function(gas, cost) {
//     let netGas, total=gas.reduce((a,b) => a+b) - cost.reduce((a,b)=> a+b);
//     if(total<0) return -1;
//     for(let i=0; i<gas.length; i++) {
//         netGas = (gas[i]-cost[i]);
//         if(netGas < 0) continue;
//         for(let j=1; j<=gas.length; j++) {
//             let ind = i+j < gas.length ? i+j: i+j-gas.length;
//             if(ind == i) return i;
//             if(netGas+gas[ind]-cost[ind] < 0) break;
//             netGas += (gas[ind]-cost[ind]);
//         }
//     }
//     return -1;
// };