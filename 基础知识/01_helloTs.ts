console.log("hello TS")

// 声明一个变量a，同时他的类型是number
// 在将来的使用中a的类型只能是number
let a: number;
a = 1
// a = "11" 此行会报错
let b: string;
b = "hello"
// b = 1 此行会报错
// TS 会在赋值时自动对变量进行类型检测
let c = true;
// c = 123 报错 c已被设置为boolean值

// 在实际中主要面临的类型错误大部分在函数中
function sum(a:number,b:number){
    // 返回值也必须是数字类型
    return a + b
}
//  sum("1",1) 报错，入参类型错误

