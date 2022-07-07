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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let level = 0, result = [];
    let traverse = (root) => {
        if(root == null) return;
        if(result.length-1 < level) {
            result.push([root.val]);
        } else {
            result[level].push(root.val);
        }
        level++;
        traverse(root.left);
        traverse(root.right);
        level--;
    }
    traverse(root);
    return result;
};