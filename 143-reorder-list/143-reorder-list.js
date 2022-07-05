/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head == null || head.next == null) return head;
    let last = head, secondLast;
    while(last.next != null) {
        if(last.next.next == null) secondLast = last;
        last = last.next;
    }
    if(head.next != last && head != last) {
        secondLast.next = null;
        let nextList = reorderList(head.next);
        head.next = last;
        last.next = nextList;
    }
    return head;
};