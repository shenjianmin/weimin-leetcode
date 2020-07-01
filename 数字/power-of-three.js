// 给定一个整数，写一个函数来判断它是否是 3 的幂次方。
let isPowerOfThree = function (n) {
    if (n === 0) {
        return false
    }
    while (n % 3 === 0) {
        n = n / 3
    }
    if (n === 1) {
        return true
    } else {
        return false
    }
}