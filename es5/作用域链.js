//函数创建时会将其 父级的 变量对象 都存在 自己的一个内部属性[[scope]] 当中,但是值得注意的是[[scope]]并不是完整的作用域链

//https://github.com/mqyqingfeng/Blog/issues/6
var scope = "global scope";
function checkscope(){
    var scope2 = 'local scope';
    return scope2;
}
checkscope();
/*
    函数上下文中 作用域链和变量对象的创建过程

    1. 函数创建时将父层作用域链加入到自身 [[scope]] 中
        checkscope.[[scope]].push( globalContext.VO );
    2. 执行到 checkscope 函数时， 将 checkscope 函数上下文 加入到 执行上下文栈中
        ECSatack = [
            checkscopeContext,
            globalContext
        ]
    3. 这是并不是立即执行内部声明，而是先做准备工作，复制自身作用域链到 函数上下文中
        checkscopeContext = {
            Scope:checkscope.[[scope]]
        }
    4. 再将以 arguments 为初始化的 活动对象(变量对象的激活状态) 加入到函数上下文
        checkscopeContext = {
            AO：{
                arguments:{length:0},
                scope2:undefined
            },
            Scope:checkscope.[[scope]]
        }
    5. 准备工作做完，开始执行函数，随意函数的执行，修改AO的属性值
        checkscopeContext = {
            AO：{
                arguments:{length:0},
                scope2:'local scope'
            },
            Scope:checkscope.[[scope]]
        }    
    6. 函数执行完毕后，将函数上下文从 执行上下文栈 中移除
        ECSatack = [
            globalContext
        ]        
*/