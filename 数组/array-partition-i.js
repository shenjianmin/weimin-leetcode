// 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 
// 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。
let arrayPairSum = function (nums) {
    let arr = nums.sort((a, b) => a - b)
    let result = 0
    for (let i = 0; i < arr.length; i += 2) {
        result += arr[i]
    }
    return result
}