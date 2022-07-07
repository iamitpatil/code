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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let level = 0, array=[];
    let traverse = (root) => {
        if(root == null) return;
        if(array.length-1 < level) array.push(root.val);
        else array[level] = root.val;
        level++;
        traverse(root.left);
        traverse(root.right);
        level--;
    }
    traverse(root);
    return array;
};