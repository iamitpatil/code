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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let stack = [], lastVal = Number.NEGATIVE_INFINITY, node=root;
    while(stack.length || node != null) {
        while(node != null) {
            stack.push(node);
            node = node.left;
        }
        if(lastVal >= stack.at(-1).val) return false;
        node = stack.pop();
        lastVal = node.val;
        
        node = node.right;
    }
    return true;
};