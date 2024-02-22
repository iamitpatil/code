/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


var addTwoNumbers = function(l1, l2) {
    if(l1 == null && l2 == null)
        return null;
    let dummy = new ListNode(), head = dummy, carry=0, sum=0;
    while(l1 != null || l2 != null || carry != 0) {
        sum = 0;
        if(l1 != null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2 != null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        sum = sum + carry;
        carry = Math.floor(sum/10);
        head.next = new ListNode(sum%10, null);
        head = head.next;
    }
    return dummy.next;
};

//recurion solution
// var addTwoNumbers = function(l1, l2) {
//     if(l1 == null && l2 == null)
//         return null;
//     l1 = (l1 == null ? new ListNode(0, null): l1);
//     l2 = (l2 == null ? new ListNode(0, null): l2);
//     let sum = l1.val + l2.val;
//     let carry = Math.floor(sum/10);
//     if(carry) {
//         if(l1.next != null)
//             return new ListNode(sum%10, addTwoNumbers(new ListNode(l1.next.val+carry, l1.next.next), l2.next));
//         else if(l2.next != null)
//             return new ListNode(sum%10, addTwoNumbers(l1.next, new ListNode(l2.next.val+carry, l2.next.next)));
//         else
//             return new ListNode(sum%10, new ListNode(carry, null))
//     }
//     return new ListNode(sum%10, addTwoNumbers(l1.next, l2.next));
// };