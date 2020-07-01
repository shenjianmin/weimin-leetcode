// 递归
// 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
let sortedListToBST = function (head) {
    let middle = head
    let prv = head
    let tail = head
    if (!head) {
        return null
    }
    if (!head.next) {
        let rt = {
            val: head.val,
            left: null,
            right: null
        }
        return rt
    }
    while (tail && tail.next) {
        tail = tail.next.next
        prv = middle
        middle = middle.next
    }
    prv.next = null
    let root = {
        val: middle.val,
        left: null,
        right: null
    }
    root.left = sortedListToBST(head)
    root.right = sortedListToBST(middle.next)
    return root
}