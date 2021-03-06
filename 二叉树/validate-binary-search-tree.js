// 递归
// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
// 假设一个二叉搜索树具有如下特征：
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。
let isValidBST = function (root) {
    return isValid(root, Infinity, -Infinity)
}
function isValid(root, max, min) {
    if (root === null) {
        return true
    }
    if (root.val >= max || root.val <= min) {
        return false
    }
    return (isValid(root.left, root.val, min) && (root.right, max, root.val))
}