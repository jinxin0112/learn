let arr = [12, 8, 5];
// includes
arr.includes(5) //true
arr.includes(99) //false

//for of 
// 与 keys/values/entries 联用
for (let i of arr.keys()) {
    console.log(i);
}
/*
for(let i of arr.values()){ //不一定支持
    console.log(i);
}*/
for (let [key, values] of arr.entries()) {
    console.log(values);
}