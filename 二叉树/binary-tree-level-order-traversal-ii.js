// 队列
// 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
let levelOrderBottom = function (root) {
    if (root === null) {
        return []
    }
    let result = [], queue = []
    queue.push(root)
    while (queue.length !== 0) {
        let arr = []
        for (let i of queue) {
            arr.push(i.val)
        }
        result.push(arr)
        let length = queue.length
        for (let i = 0; i < length; i++) {
            let node = queue.shift()
            if(node.left !== null) {
                queue.push(node.left)
            }
            if(node.right !== null) {
                queue.push(node.right)
            }
        }
    }
    return result.reverse()
}