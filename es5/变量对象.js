// 每个 执行上下文 都有三个重要属性：1.this  2.变量对象 3.作用域链

console.log(this.window === this); //true

//浏览器window对象有一个属性window 指向自己

//全局上下文的 变量对象 就是 全局对象

/*而 函数上下文的 变量对象 却不同
    1.在进入函数上下文时创建，并且由 arguments 属性创建， 值为 Arguments对象 AO = {arguments:Arguments};
    2.这个变量对象还会包括： 1）所有的形参 2）函数声明 3）变量声明
*/

function foo(a){
    var b = 2;
    function c(){

    }
    var d = function(){

    }
    b = 3;
}

foo(1);

//在执行到foo时，会创建函数上下文，并初始化 变量对象，如下

AO = {
    arguments:{
        0:1,
        length:1
    },
    a:1,
    b:2,
    c:'reference to function c(){}',
    d:'reference to FunctionExpression "d"'
}
//代码执行阶段，会再次修改 这个 变量对象的 属性值

console.log(foo);

function foo(){
    console.log("foo");
}

var foo = 1;

//会打印 函数声明而不是 undefined 。
//原因是：在执行上下文时会优先将 函数声明 加入到变量对象当中，后续变量声明执行时，如果变量名称 和 已声明的 形参名或者 函数名相同，并不会有影响