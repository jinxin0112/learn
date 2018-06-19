// 匿名闭包 : IIFE模式

var module = (function(){
    var i = 0;
    var add = function (){
        console.log(++i);
    }

    return {
        add: add
    }
})()

module.add();
module.i();

