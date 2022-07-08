/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    let items = new MaxHeap(stones);
    while(items.heap.length>1) {
        let x = items.pop();
        let y = items.pop();
        console.log(items);
        if(x!=y) items.push(Math.max(x,y)-Math.min(x,y));
    }
    return items.heap.length ? items.pop(): 0;
};


var MaxHeap = function(array) {
    this.heap = array;
    this.buildHeap();
}

MaxHeap.prototype.buildHeap = function() {
    let leafIndex = Math.floor(this.heap.length/2)-1;
    for(let i=leafIndex; i>=0; i--) this.heapifyDown(i);
}

MaxHeap.prototype.heapifyDown = function(i) {
    let root=i, left = 2*i+1, right = 2*i+2;
    if(left<this.heap.length && this.heap[root] < this.heap[left]) root = left;
    if(right<this.heap.length && this.heap[root] < this.heap[right]) root = right;
    if(i!=root) {
        //swap
        this.heap[root] = this.heap[i]^this.heap[root];
        this.heap[i] = this.heap[i]^this.heap[root];
        this.heap[root] = this.heap[i]^this.heap[root]
        //heapify new root
        this.heapifyDown(root);
    }
}

MaxHeap.prototype.heapifyUp = function(i) {
    let root=i, parent=Math.floor((i-1)/2);
    if(parent >=0 && this.heap[parent] < this.heap[root]) {
        //swap
        this.heap[root] = this.heap[parent]^this.heap[root];
        this.heap[parent] = this.heap[parent]^this.heap[root];
        this.heap[root] = this.heap[parent]^this.heap[root]
        //heapify up parent
        this.heapifyUp(parent);
    }
}

MaxHeap.prototype.push = function(val) {
    this.heap.push(val);
    this.heapifyUp(this.heap.length-1);
}

MaxHeap.prototype.pop = function() {
    let element = this.heap[0];
    if(this.heap.length > 1) {
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
    } else {
        this.heap.pop();
    }
    return element;
}

MaxHeap.prototype.top = function() {
    return this.heap.length ? this.heap[0]: undefined;
}