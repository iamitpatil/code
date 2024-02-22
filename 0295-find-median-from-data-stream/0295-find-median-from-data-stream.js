var MinHeap = function () {
    this.data = [];
}
MinHeap.prototype.pop = function() {
    let result = null;
    if(this.data.length>1) {
        result = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown();
    } else {
        result = this.data[0];
        this.data.pop();
    }
    return result;
}
MinHeap.prototype.heapifyUp = function(i=this.data.length-1) {
    let rt = i, p = Math.floor((i-1)/2);
    if(p>=0 && this.data[rt]<this.data[p]) {
        let temp = this.data[rt];
        this.data[rt] = this.data[p];
        this.data[p] = temp;
        this.heapifyUp(p);
    }
}
MinHeap.prototype.heapifyDown = function(i=0) {
    let rt = i, l = 2*i+1, r = 2*i+2;
    if(l<this.data.length && this.data[rt]>this.data[l]) rt =l;
    if(r<this.data.length && this.data[rt]>this.data[r]) rt =r;
    if(i!=rt) {
        let temp = this.data[i];
        this.data[i] = this.data[rt];
        this.data[rt] = temp;
        this.heapifyDown(rt);
    }
}
MinHeap.prototype.push = function(val) {
    this.data.push(val);
    this.heapifyUp();
}
MinHeap.prototype.top = function() {
    return this.data[0];
}
MinHeap.prototype.len = function() {
    return this.data.length;
}

var MaxHeap = function () {
    this.data = [];
}
MaxHeap.prototype.pop = function() {
    let result = null;
    if(this.data.length>1) {
        result = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown();
    } else {
        result = this.data[0];
        this.data.pop();
    }
    return result;
}
MaxHeap.prototype.heapifyUp = function(i=this.data.length-1) {
    let rt = i, p = Math.floor((i-1)/2);
    if(p>=0 && this.data[rt]>this.data[p]) {
        let temp = this.data[rt];
        this.data[rt] = this.data[p];
        this.data[p] = temp;
        this.heapifyUp(p);
    }
}
MaxHeap.prototype.heapifyDown = function(i=0) {
    let rt = i, l = 2*i+1, r = 2*i+2;
    if(l<this.data.length && this.data[rt]<this.data[l]) rt =l;
    if(r<this.data.length && this.data[rt]<this.data[r]) rt =r;
    if(i!=rt) {
        let temp = this.data[i];
        this.data[i] = this.data[rt];
        this.data[rt] = temp;
        this.heapifyDown(rt);
    }
}
MaxHeap.prototype.push = function(val) {
    this.data.push(val);
    this.heapifyUp();
}
MaxHeap.prototype.top = function() {
    return this.data[0];
}
MaxHeap.prototype.len = function() {
    return this.data.length;
}

var MedianFinder = function() {
    this.count = 0;
    this.maxHeap = new MaxHeap();
    this.minHeap = new MinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let minL = this.minHeap.len();
    let maxL = this.maxHeap.len();
    let minTop = minL > 0 ? this.minHeap.top(): Number.POSITIVE_INFINITY;
    let maxTop = maxL > 0 ? this.maxHeap.top(): Number.NEGATIVE_INFINITY;
    if(num>=minTop) {
        this.minHeap.push(num);
    } 
    else if(num<=maxTop){
        this.maxHeap.push(num);
    } 
    else {
        if(maxL>minL) this.minHeap.push(num);
        else this.maxHeap.push(num);
    }
    while(Math.max(this.maxHeap.len(), this.minHeap.len())-Math.min(this.maxHeap.len(), this.minHeap.len())>=2) {
        if(this.maxHeap.len()<this.minHeap.len()) {
            this.maxHeap.push(this.minHeap.pop());
        } else {
            this.minHeap.push(this.maxHeap.pop());
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let minL = this.minHeap.data.length;
    let maxL = this.maxHeap.data.length;
    if((maxL+minL)%2 == 1) {
        return (maxL>minL) ? this.maxHeap.top(): this.minHeap.top();
    } else if((maxL+minL) >= 2){
        return (this.maxHeap.top() + this.minHeap.top())/2;
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */