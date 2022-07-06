/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let array = [];
    for(let i=0; i<lists.length; i++) {
        let list = lists[i];
        while(list != null) {
            array.push(list);
            list = list.next;
        }
    }
    array.sort((a,b) => a.val - b.val);
    for(let i=0; i<array.length-1; i++) {
        array[i].next = array[i+1];
    }
    return array.length ? array[0]: null;
};