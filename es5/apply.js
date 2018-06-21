var foo = {
    a:1
}

function bar(name,age) {
    this.love = 'gaoyuhang';
    console.log(this.a);
    console.log(name);
    console.log(age);
    return 'wfk';
}

Function.prototype.apply1 = function(context,arr){
    var context = Object(context) || window;
    context.fn = this;

    var res;
    if(!arr){
        res = context.fn();
    }else{
        var args = [];
        for(var i=0;i<arr.length;i++){
            args.push('arr['+i+']');
        }
        res = eval('context.fn('+args+')');
    }
    delete context.fn;
    return res;
}
console.log(bar.apply1(foo,['king',24]));
console.log(foo);