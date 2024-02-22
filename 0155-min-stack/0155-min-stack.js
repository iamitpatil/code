
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    this.minStack.push(this.minStack.length ? Math.min(this.minStack[this.minStack.length-1], val): val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.length ? this.stack[this.stack.length-1]: undefined;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.length ? this.minStack[this.minStack.length-1]: undefined;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */