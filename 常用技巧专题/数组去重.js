//双层循环法（兼容性好）

var arr = [1, 1, '1', '1'];

function unique(arr) {
    var res = [];
    for (var i = 0, arrLen = arr.length; i < arrLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++) {
            if (res[j] === arr[i]) {
                break;
            }
        }
        if (j === resLen) {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(unique(arr));

//indexOf 
var arr = [1, 1, '1', '1'];
function unique(arr) {
    var res = [];
    for (var i = 0, arrLen = arr.length; i < arrLen; i++) {
        if(res.indexOf(arr[i]) === -1){
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(unique(arr));

//排序去重
