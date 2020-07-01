// 深度优先搜索 递归
// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
let maxDepth = function (root) {
    if (root === null) {
        return 0
    }
    let left_depth = maxDepth(root.left)
    let right_depth = maxDepth(root.right)
    return Math.max(left_depth, right_depth) + 1
}