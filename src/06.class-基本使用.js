function Person(name, age) {
    this.name = name
    this.age = age
}

// info属性，直接挂载给了构造函数，所以它是静态属性
Person.info = 'aaa'


const p1 = new Person('ufo', 11)
console.log(p1)
    // 通过new出来的实例，访问到的属性，叫做【实例属性】
    // console.log(p1.name)
    // console.log(p1.age)
    // 【静态属性】：通过构造函数，直接访问到的属性，叫做静态属性
console.log(Person.info)

// -------------华丽的分割线----------
console.log('---------------------------')


// 创建一个动物类
class Animal {
    // 这是类中的构造器
    // 每一个类中，都有一个构造器，如果我们程序员没有手动指定构造器，那么，可以认为内部有个隐形的看不见的空构造器，类似于constructor（）{}
    // 构造器的作用，就是每当new这个类的时候，必然会优先执行构造器中的代码
    constructor(name, age) {
            // 实例属性
            this.name = name
            this.age = age
        }
        // 在class内部，通过static修饰的属性，就是静态属性
    static info = 'dd'
}

const a1 = new Animal('hh', 6)
console.log(a1)
console.log(a1.name) //实例属性
console.log(a1.age) //实例属性
console.log(Animal.info) //info是Animal的静态属性