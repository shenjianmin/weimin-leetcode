// 写一个程序，输出从 1 到 n 数字的字符串表示。
// 1. 如果 n 是3的倍数，输出“Fizz”；
// 2. 如果 n 是5的倍数，输出“Buzz”；
// 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
let fizzBuzz = function (n) {
    let result = []
    let num = 1
    while(num <= n){
        if(num % 3 === 0 && num % 5 === 0){
            result.push('FizzBuzz')
            num++
            continue
        }
        if(num % 3 === 0) {
            result.push('Fizz')
            num++
            continue
        }
        if(num % 5 === 0){
            result.push('Buzz')
            num++
            continue
        }
        result.push(num.toString())
        num++
    }
    return result
}