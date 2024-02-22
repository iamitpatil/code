/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(root==null) return "N";
    return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let tree = data.split(",");
    let index = 0;
    let generate = (tree) => {
        if(tree[index] == "N") return null;
        let node = new TreeNode(parseInt(tree[index]))
        index++;
        node.left = generate(tree);
        index++;
        node.right = generate(tree);
        return node;
    }
    return generate(tree);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */