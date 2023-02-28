function FX() {
    /* 
        泛型
    */

    /* 
        表示函数传入的值和返回的值是同一个类型
        同样我们可以捕获用户传入的类型
    */
    function identity<T>(arg: T): T {
        return arg;
    }
    // function identity(arg){
    //     return arg;
    // }
    // 可以通过指定特定类型指定泛型类型
    let output = identity<string>("myString");
    // 也可以通过类型推断定为string
    let output1 = identity("myString");

    // function loggingIdentity<T>(arg: T): T {
    //     console.log(arg.length);  // Error: T doesn't have .length
    //     return arg;
    // }

    // 可以设置泛型T的类型
    function loggingIdentity<T>(arg: Array<T>): T[] {
        console.log(arg.length);  // Array has a .length, so no more error
        return arg;
    }

    // loggingIdentity('1') //类型“string”的参数不能赋给类型“unknown[]”的参数。
    loggingIdentity(['1'])

    interface GenericIdentityFn1 {
        <T>(v: T): T
    }
    // 接口可以接收一个类型
    interface GenericIdentityFn2<T> {
        (v: T): T
    }
    // 可以通过设置接口的方式设置函数，不用担心原函数是否设置了泛型,但要遵守原函数的类型规定
    let myIdentity1: GenericIdentityFn1 = identity;
    let myIdentity2: GenericIdentityFn2<Array<string>> = identity;

    /* 
        泛型类
        跟泛型接口差不多，都是在声明时就传入指定的类型
    */
    class GenericNumber<T> {
        zeroValue: T;
        add: (x: T, y: T) => T;
    }

    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) { return x + y; };

    /* 
        泛型可以继承其他接口
    */

    interface Lengthwise {
        length: number;
    }

    function loggingIdentity1<T extends Lengthwise>(arg: T): T {
        // 因为继承了Lengthwise接口所以传入的值一定有length属性
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    }

    /* 
        也可以通过继承的方式继承前一个泛型
    */

    function getProperty<T, K extends keyof T>(obj: T, key: K) {
        return obj[key];
    }
    
    let x = { a: 1, b: 2, c: 3, d: 4 };
    
    getProperty(x, "a"); // okay
    // getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

    /* 
        类类型的复杂应用
    */
    class BeeKeeper {
        hasMask: boolean;
    }
    
    class ZooKeeper {
        nametag: string;
    }
    
    class Animal {
        numLegs: number;
    }
    
    class Bee extends Animal {
        keeper: BeeKeeper;
    }
    
    class Lion extends Animal {
        keeper: ZooKeeper;
    }
    
    function createInstance<A extends Animal>(c: new () => A): A {
        return new c();
    }
    
    createInstance(Lion).keeper.nametag;  // typechecks!
    createInstance(Bee).keeper.hasMask;   // typechecks!

}