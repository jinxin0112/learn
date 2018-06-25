let nAdd;
let t = () => {
    let n = 99;
    nAdd = () => {
        n++;
    };
    let t2 = () => {
        console.log(n);
    };
    return t2;
};

let a1 = t();
let a2 = t();

nAdd();
a1();    //99
a2();    //100

// 同一个函数形成的多个闭包的值 相互独立， 而这里的 变量 nAdd 被赋值了 两次，以第二次为准，执行一次则改变了 a2中 n的值 