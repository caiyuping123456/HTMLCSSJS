/**
 * let声明变量和var不同，只在作用域中有用
 */

let name = "小明"
{
    let name = "小红"
    console.log(name)
}
console.log(name)
//这里可以看到let的作用域是这样

//对比var来说，var会把变量放到windows中

//注意,let修饰不可以重复修饰