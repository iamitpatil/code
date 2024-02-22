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

//with iteration
var reverseList = function(head) {
    let prev = null, current = head, next=null;
    while(current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};


//recuresive solution
// var reverseList = function(head) {
//     if(head == null) return null;
//     if(head.next == null)  return head;
//     else {
//         let reversedHead = reverseList(head.next);
//         head.next.next = head;
//         head.next = null;
//         return reversedHead;
//     }
// };