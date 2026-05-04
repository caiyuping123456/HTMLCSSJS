
//这个就是字符串
let name = "小明"
//注意，不能进行双双嵌套，也不能进行蛋蛋嵌套
//可以进行相互嵌套

//多行使用 /

// 可以显示”“ 可以使用转义

//读取长度
console.log(name.length)


//可以使用这个方式进行创建
let str1 = String("这个是一个使用String创建的这个是一个使用String创建的这个是一个使用String创建的")
console.log(str1.length)

/**
 * 下面是使用str的函数
 */
//1. charAt,这个方法是获取下标索引的一个字符
console.log(str1.charAt(2))
console.log(str1.charAt(3))

//2. concat，这个方法是进行字符串拼接的
let str2 = String("hahahahwoshidbushdusdsd")
let str3 = String("一般一把哈")
//这个是拼接一个
let temp1 = str1.concat(str2)
console.log(temp1)
//这个是拼接多个
let temp2 = str2.concat(str1,str3)
console.log(temp2)

//3. substring,这个是用于进行字符串截取的(第一个表示开始位数，第二个表示结束位数（不取）)
let temp3 =  temp1.substring(3,4)
console.log(temp3)

//4. substr,这个同样是进行字符串截取的(唯一不同就是，最后一个是截取的位数)
let temp4 =  temp1.substr(3,4)
console.log(temp4)

//5. indexOf,这个表示获取字符串的字符串在字符串的下标(最后这个表示从什么地方开始)
let temp5 = str1.indexOf("String",8)
console.log(temp5)

//6. trim，这个是用于去除字符串的空白字符的
let str4 = String("   这个  是一个空白字符  ")
let temp6 = str4.trim()
console.log(temp6)

//7. split 这个是一个分割方法(最后这个表示限制输出的个数)
let temp7 = temp6.split("",4)
console.log(temp7)
