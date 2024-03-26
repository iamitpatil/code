/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let reqMap = new Map();
    prerequisites.forEach((req) => {
        if(reqMap.has(req[0])) {
            reqMap.get(req[0]).push(req[1]);
        } else {
            reqMap.set(req[0], [req[1]]);
        }
    });
    let visited = new Set(), cycle = new Set();
    let output = [];
    let searchAndOrder = (i) => {
        if(cycle.has(i)) return false;
        if(visited.has(i)) return true;
        if(reqMap.has(i) && reqMap.get(i).length) {
            cycle.add(i);
            for(let j=0; j<reqMap.get(i).length; j++) {
                if(!searchAndOrder(reqMap.get(i)[j])) return false;
            }
            cycle.delete(i);
        }
        reqMap.set(i, []);
        visited.add(i);
        output.push(i);
        return true;
    };
    for(let k=0; k<numCourses; k++) {
        if(!searchAndOrder(k)) return [];
    }
    return output;
};