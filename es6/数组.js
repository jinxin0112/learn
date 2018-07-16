/**
 * 1. map  映射
 * 2. reduce  汇总 
 * 3. filter  过滤器
 * 4. forEach  循环(迭代)
 */

let arr1 = [12, 58, 68, 99, 45, 31];

// map
let arr2 = arr1.map(i => i >= 60 ? '及格' : '不及格');
console.log(arr2);

// reduce 一堆出来一个
let res = arr1.reduce((tmp, item, index) => {
    if (index === arr1.length - 1) {
        return tmp / index;
    } else {
        return tmp + item;
    }
});
console.log(res);

// filter
let arr3 = arr1.filter(item => item % 2 === 0);
console.log(arr3);