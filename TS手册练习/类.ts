function Class(){
    /* 
        创建一个类
    */

        class Greeter {
            greeting: string;
            constructor(message: string) {
                this.greeting = message;
            }
            greet() {
                return "Hello, " + this.greeting;
            }
        }
        
        let greeter = new Greeter("world");

        /* 
            复杂的继承，子类调用父类的方法
        */
            // 父类
            class Animal {
                name: string;
                constructor(theName: string) { this.name = theName; }
                move(distanceInMeters: number = 0) {
                    console.log(`${this.name} moved ${distanceInMeters}m.`);
                }
            }
            
            class Snake extends Animal {
                constructor(name: string) {
                    // 将值传至父类constructor里
                    super(name);
                 }

                move(distanceInMeters = 5) {
                    console.log("Slithering...");
                    // 调用父类的方法
                    super.move(distanceInMeters);
                }
            }
            
            class Horse extends Animal {

                constructor(name: string) { 
                // 把name传给父类
                    super(name); 
                }

                move(distanceInMeters = 45) {
                    console.log("Galloping...");
                    // 用父类的方法
                    super.move(distanceInMeters);
                }
            }
            
            let sam = new Snake("Sammy the Python");
            let tom: Animal = new Horse("Tommy the Palomino");
            
            sam.move();
            tom.move(34);

            // Slithering...
            // Sammy the Python moved 5m.
            // Galloping...
            // Tommy the Palomino moved 34m.

            /* 
              公共，私有与受保护的修饰符
              默认情况下 所有定义属性都是public
              当成员被标记成private时，它就不能在声明它的类的外部访问。
               如果其中一个类型里包含一个private成员，那么只有当另外一个类型中也存在这样一个private成员， 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。
            */
              class Animal1 {
                public name: string;
                public constructor(theName: string) { this.name = theName; }
                public move(distanceInMeters: number) {
                    console.log(`${this.name} moved ${distanceInMeters}m.`);
                }
            }

            class Animal2 {
                private name: string;
                constructor(theName: string) { this.name = theName; }
            }
            
            class Rhino1 extends Animal {
                constructor() { super("Rhino"); }
            }
            
            class Employee {
                private name: string;
                constructor(theName: string) { this.name = theName; }
            }
            
            let animal = new Animal2("Goat");
            let rhino = new Rhino1();
            // 继承后私有属性会公开
            console.log(rhino.name)
            let employee = new Employee("Bob");
            
            // 不能将类型“Rhino1”分配给类型“Animal2”。属性“name”在类型“Animal2”中是私有属性，但在类型“Rhino1”中不是。
            // animal = rhino;
            // 不能将类型“Employee”分配给类型“Animal2”。类型具有私有属性“name”的单独声明。
            // animal = employee;

            /* 
                构造函数也可以被标记成protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。比如，
            */
                class Person {
                    protected name: string;
                    protected constructor(theName: string) { this.name = theName; }
                }
                
                // Employee 能够继承 Person
                class Employee1 extends Person {
                    private department: string;
                
                    constructor(name: string, department: string) {
                        super(name);
                        this.department = department;
                    }
                
                    public getElevatorPitch() {
                        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
                    }
                }
                
                let howard = new Employee1("Howard", "Sales");
                // let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.

                /* 
                    你可以使用readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
                */
                    class Octopus {
                        readonly name: string;
                        readonly numberOfLegs: number = 8;
                        constructor (theName: string) {
                            this.name = theName;
                        }
                    }
                    let dad = new Octopus("Man with the 8 strong legs");
                    // dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
                
                /* 
                    在构造函数里使用private name: string参数来创建和初始化name成员。
                */
                    class Animal3 {
                        // 即声明了变量也获得了传进来的值
                        constructor(private name: string) { }
                        move(distanceInMeters: number) {
                            console.log(`${this.name} moved ${distanceInMeters}m.`);
                        }
                    }

                    let passcode = "secret passcode";

                    class Employee3 {
                        private _fullName: string;
                    
                        get fullName(): string {
                            return this._fullName;
                        }
                    
                        set fullName(newName: string) {
                            if (passcode && passcode == "secret passcode") {
                                this._fullName = newName;
                            }
                            else {
                                console.log("Error: Unauthorized update of employee!");
                            }
                        }
                    }
                    
                    let employee3 = new Employee3();
                    employee3.fullName = "Bob Smith";
                    if (employee3.fullName) {
                        alert(employee3.fullName);
                    }

                    /* 
                        静态属性
                        这些属性存在于类本身上面而不是类的实例上
                        我们使用static定义origin，因为它是所有网格都会用到的属性。 每个实例想要访问这个属性的时候，都要在origin前面加上类名。 如同在实例属性上使用this.前缀来访问属性一样，这里我们使用Grid.来访问静态属性。
                    */
                        class Grid {
                            static origin = {x: 0, y: 0};
                            calculateDistanceFromOrigin(point: {x: number; y: number;}) {
                                let xDist = (point.x - Grid.origin.x);
                                let yDist = (point.y - Grid.origin.y);
                                return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
                            }
                            constructor (public scale: number) { }
                        }
                        
                        let grid1 = new Grid(1.0);  // 1x scale
                        let grid2 = new Grid(5.0);  // 5x scale
                        
                        console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
                        console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

                        /* 
                        
                            抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含abstract关键字并且可以包含访问修饰符。
                        */

                        abstract class Department {

                            constructor(public name: string) {
                            }
                        
                            printName(): void {
                                console.log('Department name: ' + this.name);
                            }
                        
                            abstract printMeeting(): void; // 必须在派生类中实现
                        }
                        
                        class AccountingDepartment extends Department {
                        
                            constructor() {
                                super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
                            }
                        
                            printMeeting(): void {
                                console.log('The Accounting Department meets each Monday at 10am.');
                            }
                        
                            generateReports(): void {
                                console.log('Generating accounting reports...');
                            }
                        }
                        
                        let department: Department; // 允许创建一个对抽象类型的引用
                        // department = new Department(); // 错误: 不能创建一个抽象类的实例
                        department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
                        department.printName();
                        department.printMeeting();
                        // department.generateReports(); // 错误: 方法在声明的抽象类中不存在

                        /* 
                            创建构造函数
                        */
                        let Greeter4 = (function () {
                            function Greeter(message) {
                                this.greeting = message;
                            }
                            Greeter.prototype.greet = function () {
                                return "Hello, " + this.greeting;
                            };
                            return Greeter;
                        })();
                        
                        let greeter4;
                        greeter4 = new Greeter4("world");
                        console.log(greeter.greet());


                        /* 
                            把类当做接口使用
                            如上一节里所讲的，类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
                        */

                            class Point {
                                x: number;
                                y: number;
                            }
                            // 接口可以继承类的属性定义
                            interface Point3d extends Point {
                                z: number;
                            }
                            
                            let point3d: Point3d = {x: 1, y: 2, z: 3};
}