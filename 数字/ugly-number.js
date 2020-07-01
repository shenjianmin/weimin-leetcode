//编写一个程序判断给定的数是否为丑数。
//丑数就是只包含质因数 2, 3, 5 的正整数。
let isUgly = function (num) {
    if (num == 0) {
        return false
    }
    for (let i = 2; i <= 5; i++) {
        while (num % i == 0) {
            num = num / i
        }
    }
    if (num == 1) {
        return true
    } else {
        return false
    }
}