/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let list = head, fp = head, sp = head;
    while(fp != null) {
        fp = fp.next;
        if(fp == null) return false;
        fp = fp.next;
        sp = sp.next;
        if(sp == fp) return true;
    }
    return false;
};