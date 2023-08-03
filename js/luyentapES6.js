//luyện tập              forEach_reduce_Map_filter
//luyện tập              forEach_reduce_Map_filter
//luyện tập              forEach_reduce_Map_filter

// 1: forEach
// được sử dụng để lặp qua tất cả các phần tử của mảng
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((value, index, array) => {
    console.log("gia tri phan tu hien tai la " + value); //1-2-3...
    console.log("vị trí thứ " + index); //0-1-2...
    console.log("mang chi doc " + array); //1, 2, 3, 4, 5, 6, 7, 8, 9, 10
})


// 2: reduce
// let total = numbers.reduce((value, index, array) => {
//     return sum + value;
// }, 0)
// console.log(total);

let all = numbers.reduce((sum, value, index, array) => {
    if (value % 2 == 0) {
        return sum + value
    }
    return sum;
}, 0)
console.log(all);


// 3: Map
let arrstring = ["tao", "vai", "nho", "oi", "mit"]
console.log(arrstring.includes("i"));
