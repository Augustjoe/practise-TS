//声明基本类型
// 声明布尔值
let base1:boolean = true;
console.log(base1,'base1')
let base2:number = 1;
console.log(base2,'base2')
// 还支持二进制和，八进制，16进制
let hexLiteral: number = 0xf00d; // 16进制
let binaryLiteral: number = 0b1010;//二进制
let octalLiteral: number = 0o744;//八进制
console.log(hexLiteral,'hexLiteral')
console.log(binaryLiteral,'binaryLiteral')
console.log(octalLiteral,'octalLiteral')
//字符串类型
let baseString :string = 'string'
console.log(baseString,'baseString')
// 数组类型
let baseArray:number[] = [1,2,3,4,5] //可以定义数组里的元素
console.log(baseArray,'baseArray')
let baseArray2:Array<string> = ['1','2','3','4']; //也可以通过泛型定义数组中的内容
console.log(baseArray2,'baseArray2')

/* 
    元组
    元组可以定义数组中每个元素的数据类型
*/ 
let x : [number,string];
x = [1,'x'];
console.log(x,'x')
//当想赋值越界元素时，会用联合类型替代 与手册上冲突
// x[2] = 'w'

/* 
    枚举
    枚举可以为一组数组附上自己想要的名字
    创建的枚举但没有定义值的会默认赋值 0 1 2 ...
*/
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c,'c'); //1 c
console.log(Color.Red,Color.Blue,'enum color')  //0 2 enum color

enum enum1 {Red = 1, Green = 'string' , Blue = 4};
let d = enum1.Red
console.log(d,enum1.Green)

/* 
    任意类型 any
    任意类型就像普通的js语法
*/
let anyData:any = '123456'
// 当不知道数组里具体的数据时，可以设置any
let antArray : Array<any> = [1,'2',true]


/* 
    空值 void
    控制不表示任何值，是匹配 undefined 和 null(和手册冲突，不能赋值null)
    undefined 和 null 也有各自的类型，只能赋值给各自
*/
let voidData:void = undefined
// strictNullChecks 关闭时可以将空值赋值给
// let voidData1:number = undefined 
/* 
    Never
    never类型表示的是那些永不存在的值的类型。
    例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是never类型，当它们被永不为真的类型保护所约束时。
    never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never。
*/
// 推断的返回值类型为never
function fail() {
    return Error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}

/* 
    类型断言 as
    直接断言表达式或变量的类型
*/

let someValue: any = "this is a string";

// <> 空号模式 
let strLength: number = (<string>someValue).length;
// as模式 
let strLength1: number = (someValue as string).length;
