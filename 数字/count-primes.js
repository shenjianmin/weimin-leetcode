// 统计所有小于非负整数 n 的质数的数量。
let countPrimes = function (n) {
    let count = 0, isPrime = false
    if (n < 2) {
        return 0
    }
    for (let i = 2; i < n; i++) {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = true
                break
            }
        }
        if (!isPrime) {
            count++
        } else {
            isPrime = false
        }
    }
    return count
}