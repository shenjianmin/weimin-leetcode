// 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。
let isPowerOfFour = function (n) {
    let result = (Math.log(n) / Math.log(2) % 2 === 0)
    return result
}