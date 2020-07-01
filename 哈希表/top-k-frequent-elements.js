// 哈希表
// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素
let topKFrequent = function (nums, k) {
    let obj = {}
    let arr = []
    let result = []
    let b = []
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] = obj[nums[i]] + 1
        } else {
            obj[nums[i]] = 1
            b.push(nums[i])
        }
    }
    for (var i = 0; i < b.length; i++) {
        arr.push(obj[b[i]])
    }
    arr = arr.filter(function (e, index, self) {
        return self.indexOf(e) === index
    })
    arr = arr.sort((a, b) => b - a)
    for (let i = 0; i < arr.length; i++) {
        for (var j = 0; j < b.length; j++) {
            if (obj[b[j]] == arr[i]) {
                result.push(b[j])
                if (result.length == k) {
                    return result
                }
            }
        }
    }
}