// 对链表进行插入排序。
function ListNode(val) {
    this.val = val;
    this.next = null;
}
let insertionSortList = function (head) {
    if (head === null) return head;
    let preHead = new ListNode(0)
    let curr = head
    let pre = preHead
    let next = null
    while (curr) {
        next = curr.next
        while (pre.next && curr.val > pre.next.val) {
            pre = pre.next
        }
        curr.next = pre.next
        pre.next = curr
        pre = preHead
        curr = next
    }
    return preHead.next
}