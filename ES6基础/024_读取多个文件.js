/**
 *
 *
 */

const fs = require('fs')

//地狱回调
fs.readFile('./resources/haha.md',(err,data1)=>{
    fs.readFile('./resources/为学.md',(err,data2)=> {
        fs.readFile('./resources/护士.md',(err,data3)=>{
            let result = data1+data2+data3
            console.log(result)
        })
    })
});

//使用Promise进行执行
const p = new Promise((resolve, reject)=>{
    fs.readFile('./resources/haha.md',(err,data1)=>{
        resolve(data1)
    })
})

p.then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./resources/为学.md',(err,data2)=> {
            return resolve([value,data2])
        })
    })
}).then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('./resources/护士.md',(err,data2)=> {
            value.push(data2)
            return resolve(value)
        })
    })
}).then(value=>{
    console.log(value.toString())
})