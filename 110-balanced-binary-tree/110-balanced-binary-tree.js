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
var isBalanced = function(root) {
    let balanced = true;
    let traverse = (root) => {
        if(root==null) return 0;
        let ld = traverse(root.left);
        let rd = traverse(root.right);
        if(Math.max(ld,rd)-Math.min(ld,rd) > 1) balanced = false;
        return Math.max(ld+1, rd+1);
    };
    traverse(root);
    return balanced;
};