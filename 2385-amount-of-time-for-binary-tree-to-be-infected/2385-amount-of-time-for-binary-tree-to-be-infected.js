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
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    let max = 0;
    let recurse = (rt) => {
        if(rt == null) return [0, false];
        let [ld, foundLeft] = recurse(rt.left);
        let [rd, foundRight] = recurse(rt.right);
        if(rt.val == start) {
            max = Math.max(ld, rd, max);
            return [0, true];
        }
        if(foundLeft) {
            max = Math.max(ld+rd+1, max);
            return [ld+1, true];
        }
        if(foundRight) {
            max = Math.max(ld+rd+1, max);
            return [rd+1, true];
        }
        return [Math.max(ld, rd) + 1, false];
    }
    recurse(root);
    return max;
};

let convertLevelOrderArrToTree = (arr) => {
    let queue = [arr.length ? new Node(arr[0]) : null];
    let level = [];
    let head = queue[0], start = 1;
    while (queue.length) {
        while (queue.length) {
            let node = queue.shift();
            node.left = start < arr.length && arr[start] != -1 ? new Node(arr[start]) : null; 
            start++;
            node.right = start < arr.length && arr[start] != -1 ? new Node(arr[start]) : null; 
            start++;
            node.left != null ? level.push(node.left) : null;
            node.right != null ? level.push(node.right) : null;
        }
        queue = [...level];
        level = [];
    }
    return head;
}