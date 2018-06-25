// js 是按值传递

//exp 1
var a = 'king';
function foo (o){
    o = 'gyh';
    console.log(o);
}
foo(a);

//exp 2
var a = {
    name:'king'
};
function foo (o){
    o = 'gyh';
    console.log(o);
}
foo(a);

//exp 3
var a = {
    name: 'king'
}
function foo (o){
    o.name = 'gyh';
    console.log(o);
}
foo(a);
console.log(a);