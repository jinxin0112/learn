//原型链继承

function Parent(name){
    this.name = name;
    this.age = 0;
}

Parent.prototype.say = function(){
    console.log('my name is ' + this.name);
}
Parent.prototype.names = [];

function Child(name){
    this.name = name;    
}
Child.prototype = new Parent('gyh');

var king = new Child('king');
king.names.push('king');
king.age = 24;
var gyh = new Child('gyh');
console.log(gyh.__proto__);

//经典继承

function Parent() {
    this.names = [];
    this.say = function(){
        this.names.push(this.name);
        console.log('my name is '+this.names);
    }
}
function Child(name) {
    this.name = name;
    Parent.call(this);
}
var king = new Child('king');
king.say();
var gyh = new Child('gyh');//new的过程全部将属性重新遍历一遍
console.log(gyh.names);


//组合继承 ： 常用继承模式
//属性用构造函数继承，方法用原型继承
//会重复调用Parent

function Parent() {
    this.names = [];
}
Parent.prototype.say = function(){
    this.names.push(this.name);
    console.log('my name is '+this.names);
}
function Child(name) {
    this.name = name;
    Parent.call(this);
}
Child.prototype = new Parent();
var king = new Child('king');
king.say();
var gyh = new Child('gyh');//new的过程全部将属性重新遍历一遍
console.log(gyh.names);

//原型式继承

function createObj(o){//与原型链继承一样，引用类型的属性值 会共享
    function F(){}
    F.prototype = o;
    return new F(); 
}
var obj = {
    name: 'king',
    age: 24,
    friends: ['gyh']    
}
var king = createObj(obj);
console.log(king);
king.friends.push('cyt');

var gyh = createObj(obj);
console.log(gyh.friends);

//寄生继承
//在函数内部以某种形式来做对象增强，最终返回对象
function createObj(o){
    var clone = Object.create(o);
    console.log(clone);
    clone.say = function(){
        console.log(this.name);
    }
    return clone;
}
var king = createObj({name:'king'});
king.say();

//寄生组合式 继承
function Parent(name){
    this.name = name;
    this.colors = ['red','blue','green'];
}

Parent.prototype.getName = function(){
    console.log(this.name);
}

function Child(name, age){
    Parent.call(this, name);
    this.age = age;
}

var F = function(){};
F.prototype = Parent.prototype;
Child.prototype = new F();

var king = new Child('king',18);
king.getName();

// 对上面寄生组合式 进行封装
function object(o){
    var F = function(){};
    F.prototype = o.prototype;
    return new F();
}
function prototype(child,parent){
    var prototype = object(parent.prototype); 
    prototype.constructor = child;
    child.prototype = prototype;
}
