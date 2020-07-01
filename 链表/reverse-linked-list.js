// 迭代
// 反转一个单链表
let reverseList = function (head) {
    let result = null
    let curr = head
    while (curr !== null) {
        let next = curr.next
        curr.next = result
        result = curr
        curr = next
    }
    return result
}