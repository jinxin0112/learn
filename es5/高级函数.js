//高级函数

//exp1
function after(times,callBack){
    let n = 0;
    return function(x) {
        n = n + x;
        if(--times==0){
            callBack(n);
        }
    }
}

let run = after(3,(res)=>{
    console.log('完成了' + res);
});

setTimeout(()=>{
    run(1);
},200);
setTimeout(()=>{
    run(2);
},300);
setTimeout(()=>{
    run(3);
},100);

//exp2
let arr = ['String','Number','Boolean','Undefined','Null'];
let tools = {};
function getType(type){
    return function(content){
        return Object.prototype.toString.call(content).replace(/\[object\s|\]/g,'') === type;
    }
}
arr.forEach(item=>{
    tools['is' + item] = getType(item);
});
let {isString,isNumber} = tools;

console.log(isString(123));
console.log(isNumber(123));