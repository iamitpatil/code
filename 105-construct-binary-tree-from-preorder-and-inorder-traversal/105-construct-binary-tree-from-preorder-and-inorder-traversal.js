/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null;
    let leftInorder = inorder.slice(0, inorder.indexOf(preorder[0]));
    let leftPreorder = preorder.slice(1, 1+leftInorder.length);
    let rightInorder = inorder.slice(inorder.indexOf(preorder[0])+1, inorder.length);
    let rightPreorder = preorder.slice(1+leftInorder.length, preorder.length);
    return new TreeNode(preorder[0], buildTree(leftPreorder, leftInorder), buildTree(rightPreorder, rightInorder));
};