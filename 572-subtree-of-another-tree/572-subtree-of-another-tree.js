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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSameTree = (root, root2) => {
    if(root2 == null && root == null) return true;
    if(root != null && root2 != null && (root.val == root2.val)) {
        return isSameTree(root.left, root2.left) && 
            isSameTree(root.right, root2.right);
    }
    return false;
}

var isSubtree = function(root, subRoot) {
    if(subRoot == null) return true;
    if(root == null) return false;
    if(isSameTree(root, subRoot))  {
        return true;
    }
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};