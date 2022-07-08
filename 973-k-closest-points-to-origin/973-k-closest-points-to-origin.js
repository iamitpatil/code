/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    for(let i=0; i<points.length; i++) {
        points[i] = [ 
            points[i][0]*points[i][0] + points[i][1]*points[i][1],
            points[i][0], 
            points[i][1]
        ];
    }
    let heap = new MinHeap(points), found=[], pt;
    while(k>0) {
        pt = heap.pop();
        found.push([pt[1], pt[2]]);
        k--;
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
    if(left<this.heap.length && this.heap[root][0] > this.heap[left][0]) root = left;
    if(right<this.heap.length && this.heap[root][0] > this.heap[right][0]) root = right;
    if(i!=root) {
        //swap
        let temp = this.heap[root];
        this.heap[root] = this.heap[i];
        this.heap[i] = temp;
        //heapify new root
        this.heapifyDown(root);
    }
}

MinHeap.prototype.heapifyUp = function(i) {
    let root=i, parent=Math.floor((i-1)/2);
    if(parent >=0 && this.heap[parent][0] > this.heap[root][0]) {
        //swap
        let temp = this.heap[root];
        this.heap[root] = this.heap[parent];
        this.heap[parent] = temp;
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