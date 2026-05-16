

//定时器写法：
//主要是使用setTimeout()和setInterval()两个方法向队列中添加定时任务
//返回一个定时器编号
//可以使用这个编号进行取消这个定时器
var timeId = setTimeout(function (){
    console.log("我是定时任务，2秒触发")
},2000)


//注意，使用var会自动挂载到windows
let name = "小明"
//这里很清楚，this是指向对象本身的
//但是setTimeout()方法里面的this表示的windos
let user = {
    name:"小米",
    getName:function (){
        console.log(this.name)
        setTimeout(function(){
            console.log(name)
        },1000)
    }
}
user.getName()

//取消定时器
clearTimeout(timeId)

