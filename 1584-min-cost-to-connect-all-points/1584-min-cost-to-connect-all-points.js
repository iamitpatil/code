/**
 * @param {number[][]} points
 * @return {number}
 */

let buildHeap = (list) => {
    let n = list.length;
    for(let i = Math.floor(n/2)-1; i>=0; i--) {
        heapifyDown(list, i);
    }
};

let heapifyDown = (list, i) => {
    let rt = i, l = 2*i + 1, r = 2*i + 2, n = list.length;
    if(n > l && list[rt][0] > list[l][0]) rt = l;
    if(n > r && list[rt][0] > list[r][0]) rt = r;
    if(rt != i) {
        let temp = list[rt];
        list[rt] = list[i];
        list[i] = temp;
        heapifyDown(list, rt);
    }
}

let heapifyUp = (list, i) => {
    let rt = i, pt = Math.floor((i-1)/2);
    if(pt >= 0 && list[rt][0] < list[pt][0]) {
        let temp = list[rt];
        list[rt] = list[pt];
        list[pt] = temp;
        heapifyUp(list, pt);
    }
}

var minCostConnectPoints = function(points) {
    let cost = 0;
    let adjList = [[0,0]]; //item -> [cost, node_id]
    let con = new Set();
    while(con.size < points.length) {
        let [c, pI] = adjList[0];
        if(adjList.length > 1) {
            adjList[0] = adjList.pop();
            heapifyDown(adjList, 0);
        } else {
            adjList.pop();
        }
        if(con.has(pI)) {
            continue;
        }
        cost += c;
        con.add(pI);
        for(let j=0; j<points.length; j++) {
            if(!con.has(j) && j!=pI) {
                let dist = Math.abs(points[pI][0]-points[j][0]) + Math.abs(points[pI][1]-points[j][1]);
                adjList.push([dist, j]);
                heapifyUp(adjList, adjList.length-1);
            }
        }
        
    }
    return cost;
};