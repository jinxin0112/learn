// AMD 异步模块定义 主要用于浏览器端 

/*
    采用非阻塞方式异步加载模块，在模块加载完成后 执行回调

    与commonJS 的区别是 
        1）commonJS 是同步，AMD 是异步
        2）commonJS 是依赖就近，AMD是依赖提前
*/