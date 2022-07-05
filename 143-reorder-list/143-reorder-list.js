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
// brute force O(n^2) time complexity and O(n) space complexity
// var reorderList = function(head) {
//     if(head == null || head.next == null) return head;
//     let last = head, secondLast;
//     while(last.next != null) {
//         if(last.next.next == null) secondLast = last;
//         last = last.next;
//     }
//     if(head.next != last && head != last) {
//         secondLast.next = null;
//         let nextList = reorderList(head.next);
//         head.next = last;
//         last.next = nextList;
//     }
//     return head;
// };

var reorderList = function(head) {
    if(head == null || head.next == null) return head;
    let sp = head, fp = head.next;
    while(fp != null && fp.next != null) {
        fp = fp.next;
        fp = fp.next;
        sp = sp.next;
    }
    let head2 = sp.next, head1=head, newHead = head, next2=null, prev2=null;
    sp.next = null;
    //reverse 2nd linked list
    while(head2 != null) {
        next2 = head2.next;
        head2.next = prev2;
        prev2 = head2;
        head2 = next2;
    }
    head2 = prev2;
    //merge both now
    while(head2 != null || head1 != null) {
        if(head1 != null) {
            if(newHead != head1) {
                newHead.next = head1;
                newHead = newHead.next;
            }
            head1 = head1.next;
        }
        if(head2 != null) {
            newHead.next = head2;
            newHead = newHead.next;
            head2 = head2.next;
        }
    }
    return head;
};

