function show(a, b, ...args) {
    console.log(a);
    console.log(b);
    console.log(args);
    fn(...args);
}

function fn(a, b) {
    console.log(a);
    console.log(b);
}

show(1, 2, 3, 4, 5); // 收集

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

arr = [...arr1, ...arr2]; // 展开

