// 深度优先搜索
// 给定一个二叉树，判断它是否是高度平衡的二叉树。
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
let isBalanced = function (foot) {
    if (root === null) {
        return true
    }
    function depth(node) {
        if (node === null) {
            return 0
        }
        let left = depth(node.left)
        let right = depth(node.right)
        return Math.max(left, right) + 1
    }
    if (Math.abs(depth(root.left) - depth(root.right)) > 1) {
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right)
}