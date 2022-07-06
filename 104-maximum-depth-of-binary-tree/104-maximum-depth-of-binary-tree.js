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
var maxDepth = function(root) {
    if(root != null) {
        let ld, rd;
        ld = maxDepth(root.left) + 1;
        rd = maxDepth(root.right) + 1;
        return Math.max(ld, rd);
    }
    else {
        return 0;
    }
};