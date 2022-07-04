/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let map = new Map(), stack=[];
    for(let i=0; i<position.length; i++) {
        map.set(position[i], [speed[i], ((target-position[i])/speed[i])]);
    }
    position.sort((a,b) => b-a);
    for(let i=0; i<position.length; i++) {
        let current = map.get(position[i]);
        if(stack.length && current[1] <= map.get(stack.at(-1))[1]) {
            map.set(position[i], [Math.min(current[0], map.get(stack.at(-1))[0]),
                     Math.max(current[1], map.get(stack.at(-1))[1])]);
            stack.pop();
        }
        stack.push(position[i]);
    }
    return stack.length;
};