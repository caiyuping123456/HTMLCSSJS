/**
 * Set集合是一个没有从父元素的
 */
// 创建Set集合
let set1 = new Set()
let set2 = new Set(['1','sdw','32d','23s','23s','ewse','sdwwe','ewse'])

//1. add 向Set中加入一个元素
console.log(set1)
set1.add('12')
console.log(set1)
//2. size 获取Set的长度
console.log(set2.size)
//3. delete 删除数据
console.log(set2)
set2.delete('ewse')
console.log(set2)
//4. has 查看是不是有元素
console.log(set1.has('a'))