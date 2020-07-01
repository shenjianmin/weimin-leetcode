// 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
// 给出两个整数 x 和 y，计算它们之间的汉明距离。
let hammingDistance = function (x, y) {
    let count = 0
    while (!(x === 0 && y === 0)) {
        if ((x & 1) !== (y & 1)) {
            count++
        }
        x = x >> 1
        y = y >> 1
    }
    return count
}