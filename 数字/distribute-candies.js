// 给定一个偶数长度的数组，其中不同的数字代表着不同种类的糖果，每一个数字代表一个糖果。
// 你需要把这些糖果平均分给一个弟弟和一个妹妹。返回妹妹可以获得的最大糖果的种类数。
let distributeCandies = function (candies) {
    let arr = candies.sort((a, b) => a - b)
    let count = 1
    for (let i = 0; i < arr.length; i++) {
        if (count === ((arr.length) / 2)) {
            return count
        }
        if (arr[i] < arr[i + 1]) {
            count++
        }
    }
    return count
}