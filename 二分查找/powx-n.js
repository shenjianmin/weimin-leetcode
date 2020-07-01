let myPow = function (x, n) {
    let temp
    let a
    let b
    if (n == 0) {
        return 1
    } else if (n == 1) {
        return x
    } else if (n < 0) {
        n = -n
        if (n % 2 == 0) {
            temp = myPow(x, n / 2)
            a = temp * temp
            return 1 / a
        } else if (n % 2 == 1) {
            temp = myPow(x, (n - 1) / 2)
            b = temp * temp * x
            return 1 / b
        }
    } else {
        if (n % 2 == 0) {
            temp = myPow(x, n / 2)
            return temp * temp
        } else if (n % 2 == 1) {
            temp = myPow(x, (n - 1) / 2)
            return temp * temp * x
        }
    }
}