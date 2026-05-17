/**
 * 这个是一个新的数据类型
 * 表示唯一的值
 * 不能同其他的数据进行运算
 * 不能使用for——in进行循环，可以使用Reflect.ownKeys获取所有的类名
 */

//1. 创建symbol
let s1 = Symbol();
console.log(s1, typeof s1)
let s2 = Symbol("chuyu")
let s3 = Symbol("chuyu")
console.log(s2===s3)//F
//这个表示内容一样
let s4 = Symbol.for("hahah");
let s5 = Symbol.for("hahah");
console.log(s4===s5)

//2. 7种数据类型：USONB：you are so NB
// u undefine
// s string symbol
// o object
// n null number
// b boolean
