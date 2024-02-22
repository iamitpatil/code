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
// TimeComplexity O(n^2) in case tree is left or right skewed
// var buildTree = function(preorder, inorder) {
//     if(!preorder.length) return null;
//     let leftInorder = inorder.slice(0, inorder.indexOf(preorder[0]));
//     let leftPreorder = preorder.slice(1, 1+leftInorder.length);
//     let rightInorder = inorder.slice(inorder.indexOf(preorder[0])+1, inorder.length);
//     let rightPreorder = preorder.slice(1+leftInorder.length, preorder.length);
//     return new TreeNode(preorder[0], buildTree(leftPreorder, leftInorder), buildTree(rightPreorder, rightInorder));
// };

var buildTree = function(preorder, inorder) {
    let map = new Map();
    for(let i=0; i<inorder.length; i++) 
        map.set(inorder[i], i);
    let createTree = (ps, pe, is, ie) => {
        if(ps > pe) return null;
        let value = preorder[ps];
        let iri = map.get(value);
        let lis = is, lie = iri-1, lps = ps+1, lpe = lps+lie-lis;
        let ris = iri+1, rie = ie, rps = lpe+1, rpe = pe;
        let leftLen = iri-is+1;
        let rightLen = ie-iri-1;
        return new TreeNode(
            value,
            createTree(lps, lpe, lis, lie),
            createTree(rps, rpe, ris, rie)
        );
    }
    return createTree(0, preorder.length-1, 0, inorder.length-1);
}