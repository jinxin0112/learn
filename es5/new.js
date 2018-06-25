/**
    new 的过程中干了两件事：
        1. 

 */

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'lol';
}

Person.prototype.say = function(){
    console.log('I am '+ this.name +',i love ' + this.habit);
}

function objFactory(Factory){
    var args = Array.prototype.slice.call(arguments,1);
    var res = {};
    
    Factory.apply(res,args);
    res['__proto__'] = Factory.prototype;
    return res;
}

var king = new Person('king',24);

king.say();

var gyh = objFactory(Person,'gyh',24);

gyh.say();