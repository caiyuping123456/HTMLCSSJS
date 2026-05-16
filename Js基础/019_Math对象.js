

//Math里面放的就是一些数学的方法
//举例
//1. Math.abs 这个方法就是一个需绝对值的方法
let temp1 = Math.abs(-123)
console.log(temp1)

//2. Math.floor,这个方法是获取小数的下限
let temp2 = Math.floor(23.345)
let temp3 = Math.floor(-23.345)
console.log(temp2)
console.log(temp3)

//3.Math.random 这个表示获取0-1的随机值
let temp4 = Math.random()
console.log(temp4)

//案例：获取10-20的随机值
let cnt = 0
while(cnt<5) {
    let temp5 = Math.random()*10+10
    console.log(temp5);
    cnt++;
}