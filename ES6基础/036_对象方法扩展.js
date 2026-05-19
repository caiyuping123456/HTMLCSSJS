

//1. 判断两个数是否相等
console.log(Object.is(12,3123))

//2. 对象的合并
const config1 = {
    name:'1231',
    age:123
}
const config2 = {
    color:'red',
    pass:'sds'
}
const assign = Object.assign(config1,config2);
console.log(assign)
//后面的会把第一个进行覆盖
console.log(config1)
console.log(config2)

//3. 设置原型对象
const school = {
    name: 'lixi'
}
const city = {
    xihi: 'hishi'
}

Object.setPrototypeOf(school,city)