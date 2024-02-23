/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let pairs = [];
    for(let i=0; i< position.length; i++) {
        pairs.push([position[i], speed[i]]);
    }
    pairs.sort((a,b) => a[0]-b[0]);
    let ttr = 0, fleets = 0;
    while(pairs.length) {
        let car = pairs.pop();
        if(ttr < ((target-car[0])/car[1])) {
            ttr = ((target-car[0])/car[1]);
            fleets++;
        }
    }
    return fleets;
};