// 递归
// 删除链表中等于给定值 val 的所有节点
let removeElements = function (head, val) {
    if (head === null) {
        return null
    }
    head.next = removeElements(head.next, val)
    if (head.val === val) {
        return head.next
    } else {
        return head
    }
};