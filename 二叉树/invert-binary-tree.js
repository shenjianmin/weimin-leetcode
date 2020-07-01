// 递归
// 翻转一棵二叉树
let invertTree = function (root) {
    if (root === null) {
        return null
    }
    let left = invertTree(root.left)
    let right = invertTree(root.right)
    root.left = right
    root.right = left
    return root
}