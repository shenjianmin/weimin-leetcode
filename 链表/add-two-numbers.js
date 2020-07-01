// 给出两个 非空 的链表用来表示两个非负的整数。
// 其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

let addTwoNumbers = function (l1, l2) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    let result = new ListNode(null),
        nextRes = result,
        params = 0,
        val = 0
    while (l1 || l2) {
        let x = l1 ? l1.val : 0
        let y = l2 ? l2.val : 0
        val = (x + y + params) % 10
        params = Math.floor((x + y + params) / 10)
        nextRes.next = new ListNode(val)
        nextRes = nextRes.next
        if(l1 !== null) l1 = l1.next
        if(l2 !== null) l2 = l2.next
    }
    if(params) {
        nextRes.next = new ListNode(params)
    }
    return result.next
}