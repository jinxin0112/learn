/*闭包定义：
    1. 即使创建它的上下文被销毁，它依然存在
    2. 在代码中引用了自由变量
*/
var a = 'king';
function foo() {
    var a = 'gyh';
    return function(){
        console.log(a);
    }
}

var bar = foo();
bar(); //'gyh'

/*
    1. 在foo() 执行过后，其函数上下文 被移除 执行上下文栈 （辣鸡回收机制）
    2. 但是在此时return 的匿名函数的AO原型链执行foo()的变量对象， JS 发现了这一点就不会将 fooContext.AO销毁
*/

//闭包面试题
var data = [];

for (var i = 0; i < 3; i++) {
    data[i] = function () {
        console.log(i);
    };
}

data[0]();
data[1]();
data[2]();
// 并不是一个实践角度的闭包， i 是一个全局变量，在方法执行时候 全局上下文 并未被销毁，而且此时的i=3

var data = [];

for (var i = 0; i < 3; i++) {
    data[i] = (function(i){
        return function () {
            console.log(i);
        };
    })(i)
}

data[0]();
data[1]();
data[2]();

// 匿名自执行函数AO 被data里面的方法们 原型链指向着，不会被销毁