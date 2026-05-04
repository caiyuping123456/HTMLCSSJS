
//这个就是一个if语句
let name = "小红"
if (name === "小木棍"){
    console.log("我是小木棍")
}else if (name === "小明"){
    console.log("我是小明")
}else{
    console.log("我是小红")
}

//使用switch语句,也是一个条件语句
//JavaScript 的 switch 语句的 case 后面必须是一个具体的值，而不能是一个条件表达式
// 这么这个就是错的
let score = 90
switch (score) {
    case score < 60:
        console.log("不及格")
        break;
    case score < 80:
        console.log("良好")
        break;
    case score < 90:
        console.log("优秀")
        break;
    case score < 100:
        console.log("牛逼")
        break;
    default:
        console.log("100fen")
}