/**
 * 读取为学.md
 */
const fs = require('fs')

//2. 调用方法读取文件
fs.readFile('./resources/为学.md',(err,data)=>{
    //如果失败
    if (err) throw err
    //成功
    console.log(data.toString())
})

//使用这个就是异步的好处
//使用Promise
let p = new Promise(function (resolve,reject){
    fs.readFile('./resources/为学.md',(err,data)=>{
        //如果失败
        if (err) reject(err)
        //成功
        resolve(data)
    })
})

//调用
p.then(function(value){
    console.log(value.toString())
},function (reason){
    throw reason
})