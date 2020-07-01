// 深度优先遍历
// 给定一个二叉树，在树的最后一行找到最左边的值。
let findBottomLeftValue = function (root) {
    if (!root.left && !root.right) {
        return root.val
    } else {
        return maxDepth(root.left) >= maxDepth(root.right) ? (findBottomLeftValue(root.left)) : (findBottomLeftValue(root.right))
    }
}
function maxDepth(root) {
    if (!root) {
        return 0
    } else {
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    }
}