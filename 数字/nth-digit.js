// 在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。
let findNthDigit = function (n) {
    let sub = 9
    let bit = 1
    while (n > sub * bit) {
        n -= sub * bit
        sub *= 10
        bit++
    }
    let indexSub = (n - 1) / bit
    let indexNum = (n - 1) % bit
    let num = Math.pow(10, bit - 1) + indexSub
    let result = parseInt(('' + num)[indexNum])
    return result
}