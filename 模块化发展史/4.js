//IIFE 模式增强： 引入依赖

var module1 = document.querySelector.bind(document);

var modlue2 = (function($){
    var body = $('body');
    var log = function (){
        console.log(body);
    }
    return {
        log: log
    }
})(module1);

modlue2.log();

//模块模式：现代模块实现基石