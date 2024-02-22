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
