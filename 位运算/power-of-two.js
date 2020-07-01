// 与运算
// 给定一个整数，编写一个函数来判断它是否是 2 的幂次方
let isPowerOfTwo = function (n) {
    if(n <= 0) {
        return false
    }
    return n & (n - 1) === 0
}