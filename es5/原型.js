//参考阅读 https://github.com/mqyqingfeng/Blog/issues/2

function Person() {
    //this.age = 18;
}
Person.prototype.age = 16;
var person = new Person();

//person.age = 15;
//console.log(person.age === person.__proto__.age); // true
//console.log(Person.prototype.constructor == Person);
//console.log(Person.prototype === Object.getPrototypeOf(person));
//console.log(Person.prototype.__proto__ === Object.prototype);
//console.log(Object.prototype.__proto__===null);
//console.log(Function.__proto__);

//函数的prototype属性指向它的原型，而原型链是通过__proto__建立起来的，实例可以通过 .__proto__ 来找到它的原型 ，与 Object.getPrototypeOf() 作用相同