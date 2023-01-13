// 可以结构赋值设置参数的类型
function fn([number1,string1]:[number,string]){
}
let [first1, ...rest2] = [1, 2, 3, 4];
console.log(first1); // outputs 1
console.log(rest2); // outputs [ 2, 3, 4 ]
let [, second1, , fourth1] = [1, 2, 3, 4];

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// let { a, b } = o; //对象结构赋值

// ({ a, b } = { a: "baz", b: 101 }); 与手册冲突 无法不let 直接声明

// let { a, ...passthrough } = o; // 可将剩下的赋值给自定义变量
// let total = passthrough.b + passthrough.c.length;

/* 
    属性重命名
*/
//可以将结构的值进行重新命名
//  let { a: newName1, b: newName2 } = o;
// 解构赋值并加上相应的类型控制
 let {a, b}: {a: string, b: number} = o;
 
// 直接规定了接受对象wholeObject能接受的字段和类型 b加？ 后可以不传
 function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
    console.log(wholeObject,a,b)
}
keepWholeObject({a:'a',b:2,})
// 也有另外一种写法,结构对应的类型
type wholeObject = {a: string, b?: number};
function keepWholeObject2({a,b}: wholeObject) {
        console.log(a,b)
}
//  更多时候是用来添加默认值
// function f({ a, b } = { a: "", b: 0 }): void {
//     // ...
// }
// 接受一个对象，b为可传可不传，a为必传项，且a的类型必须为string类型
function f({ a, b = 0 } = { a: "" }): void {
    // ...
}
f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to {a: ""}, which then defaults b = 0
// f({}); // error, 'a' is required if you supply an argument

/* 
    展开  
*/
let first = [1, 2];
let second = [3, 4];
// 数组展开合并为一个新数组
let bothPlus = [0, ...first, ...second, 5];

