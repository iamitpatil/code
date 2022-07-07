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
var maxPathSum = function(root) {
    let total = Number.NEGATIVE_INFINITY;
    let sum = (node) => {
        if(node == null) return 0;
        let left = sum(node.left);
        let right = sum(node.right);
        total = Math.max(total, left + right + node.val, left+node.val, right+node.val, node.val);
        return Math.max(left+node.val, right+node.val, node.val);
    };
    return Math.max(sum(root), total);
};