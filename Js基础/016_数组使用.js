
//创建数组
//这个是动态的(表示可以是不同类型的)
let arr1 = []
//这个表示指定空间
let arr2 = Array(5)

//1.isArray，判断是不是数组
console.log(Array.isArray(arr2))

//2.push/pop
//push表示加入数组中，从后加
arr1.push(1)
arr1.push(true)
arr1.push(1)
arr1.push(true)
console.log(arr1)
//pop表示从最后进行出队，同时放回出队的原始
let temp = arr1.pop()
console.log(temp)
console.log(arr1)

//3.shift/unshift
// shift表示从前面进行出
arr1.push(1)
arr1.push(true)
console.log(arr1)
arr1.shift()
console.log(arr1)
//unshift表示从前面进行入队
arr1.unshift("woshi1","hsushus")
console.log(arr1)

//4.join,这个表示的是将数组按什么进行分割，再进行拼接为字符串
let temp1 = arr1.join("|")
console.log(temp1)

//5.concat这个是表示进行数组的合拼
let arr3 = []
arr3.push(12321212)
let temp2 = arr1.concat(arr3)
console.log(temp2)

//6.reverse
//这个是进行数组反转的
let temp3 = temp2.reverse()
console.log(temp3)

//7.indexOf
//这个是进行获取字符串下标的(最后一个表示的是开始的下标)
let temp4 = temp3.indexOf(1,3)
console.log(temp4)