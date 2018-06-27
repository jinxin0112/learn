/**
    new 的过程

 */

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'lol';
}

Person.prototype.say = function () {
    console.log('I am ' + this.name + ',i love ' + this.habit);
}

function objFactory(Factory) {
    var args = Array.prototype.slice.call(arguments, 1);
    var obj = {};
    obj['__proto__'] = Factory.prototype;
    var res = Factory.apply(obj, args);
    return typeof res === 'object' ? res : obj;
}

var king = new Person('king', 24);

king.say();

var gyh = objFactory(Person, 'gyh', 24);

gyh.say();