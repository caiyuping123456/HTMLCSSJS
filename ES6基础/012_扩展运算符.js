/**
 * ...扩展运算符就是可以将都会分割为一个参数序列
 */
//声明为一个数组
const boys = [1,2,3,45]
//声明函数
const chunwan = ()=>{
    console.log(arguments)
}

//这个是在调用中
chunwan(...boys)//chunwan(1,2,3,45)