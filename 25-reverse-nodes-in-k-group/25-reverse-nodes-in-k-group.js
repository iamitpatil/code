/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseList = function(head) {
    let reverse = null, next = null;
    while(head != null) {
        next = head.next;
        head.next = reverse;
        reverse = head;
        head = next;
    }
    return reverse;
}

var reverseKGroup = function(head, k) {
    let list = head, node = new ListNode(), reverse = node;
    while(list != null) {
        let check = list, cr = null, lcr;
        for(let i=1; i<k; i++) {
            if(check == null) break;
            check = check.next;
        }
        if(check != null) {
            lcr = list, i=0;
            while(i<k) {
                let next = list.next;
                list.next = cr;
                cr = list;
                list = next;
                i++;
            }
            reverse.next = cr;
            reverse = lcr;
        } 
        else {
            reverse.next = list;
            break;
        }
    }
    return node.next;
};