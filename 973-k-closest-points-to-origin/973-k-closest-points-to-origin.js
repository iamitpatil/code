/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let map = new Map();
    let heap = new MinHeap([]);
    for(let i=0; i<points.length; i++) {
        let dist = points[i][0]*points[i][0] + points[i][1]*points[i][1];
        if(!map.has(dist)) map.set(dist, [points[i]]);
        else map.get(dist).push(points[i]);
        heap.push(dist);
    }
    let found = [];
    while(k>0) {
        let d = heap.pop();
        let pts = map.get(d);
        found.push(...pts);
        map.delete(d);
        k=k-pts.length;
    }
    return found;
};

var MinHeap = function(array) {
    this.heap = array;
    this.buildHeap();
}

MinHeap.prototype.buildHeap = function() {
    let leafIndex = Math.floor(this.heap.length/2)-1;
    for(let i=leafIndex; i>=0; i--) this.heapifyDown(i);
}

MinHeap.prototype.heapifyDown = function(i) {
    let root=i, left = 2*i+1, right = 2*i+2;
    if(left<this.heap.length && this.heap[root] > this.heap[left]) root = left;
    if(right<this.heap.length && this.heap[root] > this.heap[right]) root = right;
    if(i!=root) {
        //swap
        this.heap[root] = this.heap[i]^this.heap[root];
        this.heap[i] = this.heap[i]^this.heap[root];
        this.heap[root] = this.heap[i]^this.heap[root]
        //heapify new root
        this.heapifyDown(root);
    }
}

MinHeap.prototype.heapifyUp = function(i) {
    let root=i, parent=Math.floor((i-1)/2);
    if(parent >=0 && this.heap[parent] > this.heap[root]) {
        //swap
        this.heap[root] = this.heap[parent]^this.heap[root];
        this.heap[parent] = this.heap[parent]^this.heap[root];
        this.heap[root] = this.heap[parent]^this.heap[root]
        //heapify up parent
        this.heapifyUp(parent);
    }
}

MinHeap.prototype.push = function(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length-1);
}

MinHeap.prototype.pop = function() {
    let element = this.heap[0];
    if(this.heap.length > 1) {
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
    } else {
        this.heap.pop();
    }
    return element;
}

MinHeap.prototype.top = function() {
    return this.heap.length ? this.heap[0]: undefined;
}