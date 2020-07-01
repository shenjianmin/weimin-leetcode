// 回溯法递归
// 给定一个没有重复数字的序列，返回其所有可能的全排列。
function permute(nums) {
    let jihao = []
    let stack = []
    let result = []
    for (var i = 0; i < nums.length; i++) {
        jihao[i] = false
    }
    function jinxing(nums) {
        for (var j = 0; j < nums.length; j++) {
            if (jihao[j] === false) {
                stack.push(nums[j])
                jihao[j] = true
                if (stack.length == nums.length) {
                    result.push(stack.slice(0))
                } else {
                    jinxing(nums)
                }
                jihao[j] = false
                stack.pop()
            }
        }
        return result
    }
    return jinxing(nums)
}

