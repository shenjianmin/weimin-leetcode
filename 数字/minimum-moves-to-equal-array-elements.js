// 数学归纳法
// 给定一个长度为 n 的非空整数数组，
// 找到让数组所有元素相等的最小移动次数。
// 每次移动可以使 n - 1 个元素增加 1。
let minMoves = function (nums) {
    let count = 0
    let min = Math.min.apply(this, nums)
    for (let i = 0; i < nums.length; i++) {
        count = count + (nums[i] - min)
    }
    return count
}