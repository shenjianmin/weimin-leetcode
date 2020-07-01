// 迭代器
// 实现一个二叉搜索树迭代器。你将使用二叉搜索树的根节点初始化迭代器。
// 调用 next() 将返回二叉搜索树中的下一个最小的数。
let BSTIterator = function (root) {
    this.iterator = generator(root)
    this.temp = this.iterator.next()
    function* generator(root) {
        if (root) {
            yield* generator(root.left)
            yield root.val
            yield* generator(root.right)
        }
    }
}
BSTIterator.prototype.hasNext = function () {
    return !this.temp.done
}
BSTIterator.prototype.next = function () {
    let res = this.temp.value
    this.temp = this.iterator.next()
    return res
}