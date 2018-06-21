var foo = {
    a:1
}

function bar(name,age) {
    console.log(this.a);
    console.log(name);
    console.log(age);
    return 'wfk';
}

Function.prototype.call1 = function(context){
    var context = Object(context) || window;
    var args = [];
    for(var i=1;i<arguments.length;i++){
        args.push('arguments['+i+']');
    }
    context.fn = this;
    var res = eval('context.fn('+args+')');
    delete context.fn;
    return res;
}
console.log(bar.call1(foo,'king',24));