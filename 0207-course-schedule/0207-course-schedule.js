/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let reqMap = new Map();
    prerequisites.forEach((req) => {
        if(reqMap.has(req[0])) {
            reqMap.get(req[0]).push(req[1]);
        } else {
            reqMap.set(req[0], [req[1]]);
        }
    });
    let visited = new Set();
    let canComplete = (i) => {
        if(visited.has(i)) return false;
        if(reqMap.has(i)  && reqMap.get(i).length) {
            visited.add(i);
            for(let j=0; j<reqMap.get(i).length; j++) {
                if(!canComplete(reqMap.get(i)[j])) return false;
            }
            reqMap.set(i, []);
            visited.delete(i);
            return true;
        } else {
            reqMap.set(i, []);
            return true;
        }
    };
    for(let i=0; i<numCourses; i++) {
        if(reqMap.has(i) && reqMap.get(i).length) {
            if(!canComplete(i)) return false;
        }
    }
    return true;
};