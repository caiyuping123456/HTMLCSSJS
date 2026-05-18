
let arr = [1,2,3,4,56,1,2,3,4,56]

//1. 数组去重
let temp1 = new Set(arr)
console.log(temp1)
let temp2 = [...temp1]
console.log(temp2)

//2. 交集
let arr2 = [2,3,56,1232]

let temp3 = [...new Set(arr)].filter(item=>{
    let s2 = new Set(arr2)
    if (s2.has(item)){
        return true;
    }else {
        return false
    }
})
console.log(temp3)

//3. 并集
let temp4 = [...new Set([...arr,...arr2])]
console.log(temp4)

//4. 差集
let temp5 = arr.filter(item=>! new Set(arr2).has(item))
console.log(temp5)