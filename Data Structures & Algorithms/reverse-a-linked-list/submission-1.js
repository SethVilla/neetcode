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
        let current = head // 1->2->3->null
        let prev = null // -> null

        while (current) {
            let next = current.next // 2-3-> null
            current.next = prev // 3->2->1->null
            prev = current
            current = next
        }

        return prev

    }
}
