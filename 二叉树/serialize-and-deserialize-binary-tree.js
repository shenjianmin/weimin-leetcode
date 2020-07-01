// 队列 层序遍历
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let serialize = function (root) {
    let res = []
    if (root) {
        let q = [root]
        while (q.length) {
            let node = q.shift()
            if (node) {
                res.push(node.val)
                q.push(node.left)
                q.push(node.right)
            } else {
                res.push(null)
            }
        }
    }
    while (res[res.length - 1] === null) {
        res.pop()
    }
    return res
}
let deserialize = function (data) {
    let value
    if (!data.length) return null;
    let root = new TreeNode(data.shift())
    let q = [root]
    while (q.length) {
        let node = q.shift()
        node.left = (value = data.shift()) || value === 0 ? new TreeNode(value) : null
        node.right = (value = data.shift()) || value === 0 ? new TreeNode(value) : null
        if (node.left) {
            q.push(node.left)
        }
        if (node.right) {
            q.push(node.right)
        }
    }
    return root
}