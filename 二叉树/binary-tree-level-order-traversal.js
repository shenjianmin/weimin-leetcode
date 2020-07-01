// 迭代
// 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
let levelOrder = function (root) {
    let currow = [root]
    let nextrow = []
    let result = []
    let temp
    if (!root) return [];
    while (currow.length) {
        temp = []
        for (let i = 0; i < currow.length; i++) {
            temp.push(currow[i].val)
            if (currow[i].left) nextrow.push(currow[i].left)
            if (currow[i].right) nextrow.push(currow[i].right)
        }
        result.push(temp)
        currow = nextrow
        nextrow = []
    }
    return result
}