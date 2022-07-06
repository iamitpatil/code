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
var mergeLists = function(l1, l2) {
    let head = new ListNode(), list = head;
    while(l1 != null || l2 != null) {
        if(l1 != null && l2!=null) {
            if(l1.val >= l2.val) {
                head.next = l2;
                l2 = l2.next;
            } else {
                head.next = l1;
                l1 = l1.next;
            }
        } else if(l1 != null) {
            head.next = l1;
            break;
        } else {
            head.next = l2;
            break;
        }
        head = head.next;
    }
    return list.next;
}
var mergeKLists = function(lists) {
    let mergedLists;
    while(lists.length > 1) {
        mergedLists = [];
        for(let i=0; i<lists.length; i=i+2) {
            mergedLists.push(mergeLists(lists[i], (i+1<lists.length) ? lists[i+1]: null));
        }
        lists = mergedLists;
    }
    return (lists.length == 1) ? lists[0]: null;
};


// heapsort O((n.k) Log(n.k)) k= avg length of each list, n = lists len
// var mergeKLists = function(lists) {
//     let array = [];
//     for(let i=0; i<lists.length; i++) {
//         let list = lists[i];
//         while(list != null) {
//             array.push(list);
//             list = list.next;
//         }
//     }
//     array.sort((a,b) => a.val - b.val);
//     for(let i=0; i<array.length-1; i++) {
//         array[i].next = array[i+1];
//     }
//     return array.length ? array[0]: null;
// };