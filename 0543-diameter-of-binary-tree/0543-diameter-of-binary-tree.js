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

var diameterOfBinaryTree = function(root) {
    let max = 0;
    let traverse = function(root) {
        if(root==null) return -1;
        let ld = traverse(root.left);
        let rd = traverse(root.right);
        let h = 1 + Math.max(ld,rd);
        max = Math.max(max, 2+ld+rd);
        return h;
    }
    traverse(root);
    return max;
};