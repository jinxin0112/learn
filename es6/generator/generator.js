/**
 * 挤牙膏
 * 
 * 特别适合数据请求
 */

function* show(a) {
    console.log('a');
    let b = yield 33
    console.log(a);
    console.log(b);
    yield 15
    console.log('b');
    return 55

}

let genOjb = show(8);

/**
 * yield  传参
 */
let res1 = genOjb.next(12);
console.log(res1);
genOjb.next(5);


/**
 * 返回
 */
let res = genOjb.next();
console.log(res);