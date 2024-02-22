
function Node(key, val, pre, next) {
    this.key = key;
    this.val = val;
    this.pre = pre ? pre: null;
    this.next = next ? next: null;
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map();
    this.capacity = capacity;
    this.head = new Node(-1,0);
    this.tail = new Node(-2,0);
    this.head.next = this.tail;
    this.tail.pre = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.map.has(key)) {
        let node = this.map.get(key);
        //remove accessed node from linked list current pos
        node.pre.next = node.next;
        node.next.pre = node.pre;
        //add it on top
        node.next = this.head.next;
        node.pre = this.head;
        this.head.next = node;
        node.next.pre = node;
        return node.val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node;
    if(this.map.has(key)) {
        node = this.map.get(key);
        node.val = value;
        //unlink node from list
        node.pre.next = node.next;
        node.next.pre = node.pre;
    } else {
        //create node and delete lru if we hit capacity
        node = new Node(key, value);
        if(this.capacity == this.map.size) {
            let lru = this.tail.pre;
            lru.pre.next = lru.next;
            lru.next.pre = lru.pre;
            this.map.delete(lru.key);
        }
    }
    //append node after head
    node.next = this.head.next;
    node.pre = this.head;
    node.next.pre = node;
    this.head.next = node;
    this.map.set(key, node);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */