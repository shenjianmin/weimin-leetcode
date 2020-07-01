// 广度优先搜索
// 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
let rightSideView = function (root) {
    let result = []
    let stack = []
    let l
    let rt
    if (root) {
        stack.push(root)
        while (stack.length > 0) {
            l = stack.length
            for (let i = 0; i < l; i++) {
                rt = stack.shift()
                if (i == 0) {
                    result.push(rt.val)
                }
                if (rt.right) {
                    stack.push(rt.right)
                }
                if (rt.left) {
                    stack.push(rt.left)
                }
            }
        }
    } else {
        return null
    }
    return result
}