/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {

        let curr = head // 1->2->3->null
        let prev = null //.         0->null. 3->2->1->->0->null

        while (curr) {
            let nxt = curr.next 
            curr.next = prev 
            prev = curr
            curr = nxt 
        }

        return prev

        
    }
}
