// 递归
// 给定一个二叉树，返回所有从根节点到叶子节点的路径。
let binaryTreePaths = function () {
    if (root === null) {
        return []
    }
    if (root.left === null && root.right === null) {
        return [root.val.toString()]
    }
    let left = binaryTreePaths(root.left)
    let right = binaryTreePaths(root.right)
    let result = left.concat(right).map(item => root.val + '->' + item)
    return result
}