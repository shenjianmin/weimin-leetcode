// 位运算
// 给定一个正整数 n，你可以做如下操作：
// 1. 如果 n 是偶数，则用 n / 2替换 n。
// 2. 如果 n 是奇数，则可以用 n + 1或n - 1替换 n。
// n 变为 1 所需的最小替换次数是多少？
let integerReplacement = function (n) {
    let count = 0
    while (n != 1) {
        if (n % 2 == 0) {
            n = n / 2
        } else if (n == 3 || (n & 2) == 0) {
            n = n - 1
        } else {
            n = n + 1
        }
        count++
    }
    return count
}