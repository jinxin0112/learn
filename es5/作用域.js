var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();
//结果是1 而不是2 ，说明变量在声明的时候就确定了其作用域。JS 是静态作用域

var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return console.log(scope);
    }
    return f();
}
checkscope();

var scope = "global scope";
function checkscope(){
    f();
    var scope = "local scope";
    function f(){
        return console.log(scope);
    }
    //return f;
}
checkscope();

//两个的结果都是local scope ，函数的作用域基于函数创建的位置。 这是词法作用域
