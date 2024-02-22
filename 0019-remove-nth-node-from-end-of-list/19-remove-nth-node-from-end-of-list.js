/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head), fp = head, sp = dummy, count = 0;
    while(fp != null) {
        fp = fp.next;
        count++;
        if((count-n) > 0) sp = sp.next;
    }
    if(sp.next != null) {
        sp.next = sp.next.next
    }
    return dummy.next;
};