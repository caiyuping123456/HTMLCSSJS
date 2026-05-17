// ========== 1. Symbol.hasInstance ==========
// 自定义 instanceof 的行为
class MyArray {
    static [Symbol.hasInstance](instance) {
        return Array.isArray(instance);
    }
}
console.log([] instanceof MyArray); // true
console.log({} instanceof MyArray); // false


// ========== 2. Symbol.isConcatSpreadable ==========
// 控制 concat() 是否展开数组/类数组对象
let arr = [1, 2];
arr[Symbol.isConcatSpreadable] = false;
console.log([].concat(arr, [3])); // [[1,2], 3]

let fakeArr = {
    0: 'a', 1: 'b', length: 2,
    [Symbol.isConcatSpreadable]: true
};
console.log([].concat(fakeArr, 'c')); // ['a', 'b', 'c']


// ========== 3. Symbol.iterator ==========
// 定义对象的默认迭代器（for...of 会用到）
let obj = {
    data: [10, 20, 30],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => ({
                value: this.data[index++],
                done: index > this.data.length
            })
        };
    }
};
for (let v of obj) console.log(v); // 10 20 30


// ========== 4. Symbol.asyncIterator ==========
// 定义异步迭代器（for await...of 会用到）
let asyncObj = {
    data: [1, 2, 3],
    async *[Symbol.asyncIterator]() {
        for (let item of this.data) {
            await new Promise(r => setTimeout(r, 100));
            yield item;
        }
    }
};
// (async () => { for await (let v of asyncObj) console.log(v); })();


// ========== 5. Symbol.match ==========
// 自定义 String.prototype.match 的行为
let matcher = {
    [Symbol.match](str) {
        return str.includes('hello') ? ['found'] : null;
    }
};
console.log('hello world'.match(matcher)); // ['found']


// ========== 6. Symbol.replace ==========
// 自定义 String.prototype.replace 的行为
let replacer = {
    [Symbol.replace](str, replacement) {
        return str.replace(/world/g, replacement);
    }
};
console.log('hello world'.replace(replacer, 'JS')); // hello JS


// ========== 7. Symbol.search ==========
// 自定义 String.prototype.search 的行为
let searcher = {
    [Symbol.search](str) {
        return str.includes('foo') ? 0 : -1;
    }
};
console.log('foobar'.search(searcher)); // 0
console.log('bazbar'.search(searcher)); // -1


// ========== 8. Symbol.split ==========
// 自定义 String.prototype.split 的行为
let splitter = {
    [Symbol.split](str) {
        return str.split('').reverse().join('').split('');
    }
};
console.log('abc'.split(splitter)); // ['c', 'b', 'a']


// ========== 9. Symbol.species ==========
// 控制衍生对象的构造函数（用于数组、Promise 等方法返回新实例时）
class MyArr extends Array {
    static get [Symbol.species]() {
        return Array; // 让 map() 等方法返回普通 Array，而不是 MyArr
    }
    customMethod() {
        return 'custom';
    }
}
let myArr = new MyArr(1, 2, 3);
let mapped = myArr.map(x => x * 2);
console.log(mapped instanceof MyArr); // false（因为 Symbol.species 返回 Array）
console.log(mapped instanceof Array); // true


// ========== 10. Symbol.toPrimitive ==========
// 控制对象转换为原始值（数字、字符串、默认）时的行为
let numObj = {
    value: 42,
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') return this.value;
        if (hint === 'string') return `值是${this.value}`;
        return this.value; // default
    }
};
console.log(+numObj);      // 42（number）
console.log(`${numObj}`);  // 值是42（string）
console.log(numObj + 5);   // 47（default）


// ========== 11. Symbol.toStringTag ==========
// 自定义 Object.prototype.toString 返回的标签
class CustomClass {
    get [Symbol.toStringTag]() {
        return 'CustomClass';
    }
}
let instance = new CustomClass();
console.log(Object.prototype.toString.call(instance)); // [object CustomClass]
console.log(instance.toString()); // [object CustomClass]

// 内置对象也常用
console.log(Object.prototype.toString.call(new Map()));    // [object Map]
console.log(Object.prototype.toString.call([]));           // [object Array]