// 递归
// 给定一个二叉树，返回它的中序 遍历。
let inorderTraversal = function (root) {
    let result = []
    function handleRoot(root) {
        if (root !== null) {
            if (root.left !== null) {
                handleRoot(root.left)
            }
            result.push(root.val)
            if (root.right !== null) {
                handleRoot(root.right)
            }
        }
    }
    handleRoot(root)
    return result
}