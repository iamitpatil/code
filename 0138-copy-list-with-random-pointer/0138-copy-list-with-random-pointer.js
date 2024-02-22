/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let list=head, currentNode = null, map = new Map(), newHead = null;
    while(list != null) {
        map.set(list, new Node(list.val, null, null));
        list = list.next;
    }
    list = head;
    let copy = null;
    while(list != null) {
        copy = map.get(list);
        if(newHead == null) newHead = copy;
        copy.next = list.next != null ? map.get(list.next): null;
        copy.random = list.random != null ? map.get(list.random): null;
        list = list.next;
    }
    return newHead;
};