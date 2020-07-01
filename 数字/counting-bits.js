// 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
let countBits = function (num) {
    let i
    for (i = 0; ; i++) {
        if (num < 2 ** i) {
            break
        }
    }
    let result = [0]
    for (let j = 1; j <= i; j++) {
        for (let x = 0; x < (2 ** (j - 1)); x++) {
            result.push(result[x] + 1)
        }
    }
    result.splice(num + 1, Infinity)
    return result
}