// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let sortedArrayToBST = function (nums) {
    let len = nums.length
    let mid = Math.floor(len / 2)
    if (len === 0) {
        return null
    }
    let node = new TreeNode(nums[mid])
    if (mid > 0) {
        node.left = sortedArrayToBST(nums.slice(0, mid))
    }
    if (mid + 1 <= len) {
        node.right = sortedArrayToBST(nums.slice(mid + 1))
    }
    return node
}