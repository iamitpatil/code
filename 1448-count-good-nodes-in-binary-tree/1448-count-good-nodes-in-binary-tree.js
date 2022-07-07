/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let nodes = [], stack=[], maxStack = [];
    stack.push(root); 
    maxStack.push(root.val);
    while(stack.length) {
        let node = stack.pop();
        let maxValue = maxStack.pop();
        if(maxValue <= node.val) nodes.push(node.val);
        if(node.right != null) {
            stack.push(node.right);
            maxStack.push(Math.max(maxValue, node.right.val));
        }
        if(node.left != null) {
            stack.push(node.left);
            maxStack.push(Math.max(maxValue, node.left.val));
        }
    }
    console.log(nodes)
    return nodes.length;
};