var arrLike = {
    0: 'name',
    1: 'age',
    2: 'sex',
    length:3
}

var arr1 = Array.prototype.slice.call(arrLike,0);
var arr2 = Array.prototype.concat.apply([],arrLike);
var arr3 = Array.from(arrLike);
var arr4 = Array.prototype.splice.call(arrLike,0);


console.log(arr2);