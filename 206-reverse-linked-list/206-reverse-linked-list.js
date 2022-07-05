/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null) return null;
    let next = head.next;
    if(next == null)  return head;
    else {
        let reversedHead = reverseList(head.next);
        next.next = head;
        head.next = null;
        return reversedHead;
    }
};