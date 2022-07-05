/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = null, current=null, prev =null;
    while(list1 != null || list2 != null) {
        if(list1!=null && list2!=null) {
            if(list1.val >= list2.val) {
                current = list2;
                list2 = list2.next;
            }
            else {
                current = list1;
                list1 = list1.next;
            }
        }
        else if(list1 != null) {
            current = list1;
            list1 = list1.next;
        }
        else if(list2 != null) {
            current = list2;
            list2 = list2.next;
        }
        if(prev == null) prev = current;
        else {
            prev.next = current;
            prev = prev.next;
        }
        if(head == null) head = current;
    }
    return head;
};