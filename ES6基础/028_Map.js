/**
 * Map和对象的区别就是Object的key是string类型或者null
 *
 */
//构造Map
let map1 = new Map()
let map2 = new Map()

//1. 添加
map1.set('name','林处于')
map1.set('change',function (){
    console.log('我是change函数')
})
console.log(map1)

//2. size放回一个map的长度
console.log(map1.size)

//3. 删除元素
map1.delete('change')
console.log(map1)

//4. 获取元素
let name = map1.get('name')
console.log(name)

//5. 遍历
map1.set('age',123)
map1.set('search',['a','asd','sdw','哈哈哈'])

for(let item of map1){
    console.log(item)
}

//6. 清空元素
map1.clear()
console.log(map1.size)