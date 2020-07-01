// 根据一棵树的中序遍历与后序遍历构造二叉树。
let restoreTree = function (inorder, postorder) {
    return restore(postorder.length - 1, 0, postorder.length - 1)
    function restore(index, start, end) {
        if (start > end) {
            return null
        }
        let node = {
            val: postorder[index],
            left: null,
            right: null
        }
        let pos = inorder.indexOf(postorder[index])
        node.left = restore(index - (end - pos) - 1, start, pos - 1)
        node.right = restore(index - 1, pos + 1, end)
        return node
    }
}