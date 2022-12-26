class Dog{
/* 
    constructor 构造函数
    会在对象被创建时调用
*/
    name:String;
    age:number;
    constructor(name:String,age:number){
        // 在构造函数中，this指向创建的实例
        console.log(this,'constructor')
        this.name = name;
        this.age = age;
    }
    bark(){
        // 这个this指向的也是实例
        console.log(this,'bark')
        console.log("汪汪")
    }
}

const dog = new Dog("修狗",18);
console.log(dog)


