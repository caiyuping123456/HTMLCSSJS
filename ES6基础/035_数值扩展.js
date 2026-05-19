/**
 *
 */

//1.Number.EPSILON就是表示最小的一个精度：2.220446049250313e-16
//用于浮点数比较
console.log(Number.EPSILON);

//2. 八进制和二进制
//二进制1
let b = 0b010101
//八进制
let o = 0o0202
//十进制
let t = 100
//十六进行
let x = 0xff
console.log(b)
console.log(o)
console.log(t)
console.log(x)

//3. 检查是不是是一个有限数
console.log(Number.isFinite(4/3))
console.log(Number.isFinite(100/5))

//4. 检查是不是NaN
console.log(Number.isNaN(123))
console.log(Number.isNaN(NaN))

//5. 字符串边数值
console.log(Number.parseInt("123"))


//6. 判断是不是整数
console.log(Number.isInteger(12))
console.log(Number.isInteger(12.234))

//7. 判断是不是正数或者负数
console.log(Math.sign(-12))

//8. 抹小数
console.log(Math.trunc(12.122))
