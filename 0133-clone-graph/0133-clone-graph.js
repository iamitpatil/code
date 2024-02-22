/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(node == null) return node;
    let n = new Map(), q = [];
    let newNode = new Node(node.val);
    q.push(node);
    n.set(node, newNode);
    while(q.length) {
        let top = q.shift();
        let rt = n.get(top);
        for(let nd of top.neighbors) {
            if(!n.has(nd)) {
                n.set(nd, new Node(nd.val));
                q.push(nd);
            }
            rt.neighbors.push(n.get(nd));
        }
    }
    return newNode;
};