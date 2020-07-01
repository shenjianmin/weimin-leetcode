// 给定一个二进制数组， 计算其中最大连续1的个数。
let findMaxConsecutiveOnes = function (nums) {
    let count = 0
    let result = 0
    for (let i of nums) {
        if (i === 1) {
            count++
        } else {
            result = (count > result) ? count : result
            count = 0
        }
    }
    result = (count > result) ? count : result
    return result
}