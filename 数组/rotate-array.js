// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
let reverse = function (arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
}
let rotate = function (arr, k) {
    let len = arr.length
    reverse(arr, 0, len - k - 1)
    reverse(arr, len - k, len - 1)
    reverse(arr, 0, len - 1)
    return arr
}