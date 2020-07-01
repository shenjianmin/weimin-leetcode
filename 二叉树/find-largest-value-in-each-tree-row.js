// 广度优先搜索
// 您需要在二叉树的每一行中找到最大的值。
let largestValues = function (root) {
    if (!root) {
        return [];
    }
    var result = [];
    var current = [root];
    while (current.length != 0) {
        var max = -Infinity;
        var next = [];
        for (var i = 0; i < current.length; i++) {
            var currentNode = current[i];
            max = Math.max(max, currentNode.val);
            if (currentNode.left != null) {
                next.push(currentNode.left);
            }
            if (currentNode.right != null) {
                next.push(currentNode.right);
            }
        }
        result.push(max);
        current = next;
    }
    return result;
}