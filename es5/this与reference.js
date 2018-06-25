// this的值 和 reference相关,而 reference属于规范规范类型，由浏览器底层处理，并不存在实际的js 代码中

var a = 1;
var b = {
    a: 2,
    foo: function () {
        console.log(this);
    }
}

b.foo();
(b.foo)();
(b.foo = b.foo)();
(false || b.foo)();
(b.foo, b.foo)();
// 函数执行() 左边部分为 MemberExpression
// 判断 MemberExpression 是否为 Reference 类型
