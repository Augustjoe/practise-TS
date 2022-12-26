// ts可以进行字面类型声明
let A : 10;
A = 10;
// A = 11 报错 A已被声明为10 无法声明为11

// 联合类型
let B : "male" | "female"; //B只能被声明为“male” 或 “female”
B = "male"
// 可以使用多个类型或字面量
let C : boolean | string;
// B = "man"  报错
let D: any; //使用任意类型，不建议跟js一样了
let e: unknown;
let s:string;
//s = D; //D的类型是any，它可以赋值任意变量，影响任意被赋值的变量
// s = e 报错 unknown类型不能随便赋值,是一个类型安全的any
//如果一定要赋值可以使用if
if(typeof e === "string"){
    s = e
}
// 类型断言，手动断言e就是字符串，可以告诉解析器变量的实际类型
s = e as string;
s =  <string> e;

// 函数可以设置返回值类型
function fn():string | number {
    return 123456
}
// 当函数没有返回值时可以设置返回值为空，表面没有返回值
function f():void{
}
// never 不能返回任何值
function f1():never{
 throw console.error();
}

// object类型并不实用，因为在TS中对象类型太多了，万物都是对象
let a1:object;
a1 = {};
a1 = function(){};

// 可设置b1对象的必选值，必须有name属性，age属性可有可用
// 但同样限制了b1可包含的属性值，只可有name,age
let b1:{name:string,age?:number}
b1 = {name:"孙悟空",age:18}

// 表明c1除name外可添加任意属性值，[proName:string]:any - 任意属性的任意类型值
let c1:{name:string,[proName:string]:any}
c1 = {name:"猪八戒",age:19}

/* 
    设置函数结构的类型声明
*/
let d1 :(a:number,b:string)=>string;
d1 = function (a:number,b:string){
    return a + b
}

/* 
    声明数组里的类型可以是string 或 number
*/
let e1:string | number [];
let g:Array<string | number>;

/* 
    元组，就是长度固定的数组,语法：[类型，类型]
*/
let h: [string,number,Boolean]
h = ["123",1,true]

/* 
    枚举类型：Geber
    当输入Geber时实际传入的值为0
*/
enum Geber{
    male = 0,
    femate = 1
}

let i : {name: string,gender:Geber}
i = {
    name:"张三",
    gender:Geber.male
}

// 可以用 & 来设置两个条件
let j:{name:string} & { age:number }
// 等于 let j: {name:string,age:number}
j = {name:"name",age:18}

// 类型的别名 可以给类型设置类名
type myType = 1 | 2 | 3 | 4 | 5 | 6;
let k :myType;
k = 1;
k = 2;


