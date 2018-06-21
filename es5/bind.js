Function.prototype.bind1 = function(context){
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable"); //必须是个函数调用bind
    }
    var args = Array.prototype.slice.call(arguments,1);
    var that = this;
    
    var fNOP = function () {};
    var bindFunc = function(){
        var bindArgs = Array.prototype.slice.call(arguments);
         
        return that.apply(this instanceof bindFunc?this:context,args.concat(bindArgs));
    } 
    fNOP.prototype = this.prototype;
    bindFunc.prototype = new fNOP();
    return bindFunc
}


var foo = {
    a:1
}

function bar(name,age) {
    this.love = 'gyh';
    console.log(this.a);
    console.log(name);
    console.log(age);
    console.log(this.love);
    console.log(this.jin);
    return 'wfk';
}
bar.prototype.jin = 'xin';
var Bar = bar.bind1(foo,'gao');
var b = new Bar(23);
console.log(bar.bind1(foo,'king')(24));
console.log(foo);
console.log(b.love);
console.log(b.jin);
console.log(foo.love);