// 动态规划
// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
let minimumTotal = function (triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
        let a = triangle[i]
        let b = triangle[i + 1]
        for (let j = 0; j < a.length; j++) {
            if (b[j] > b[j + 1]) {
                a[j] = a[j] + b[j + 1]
            } else {
                a[j] = a[j] + b[j]
            }
        }
    }
    return triangle[0][0]
}