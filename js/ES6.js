// cach khai bao ham
// c1: su dung tu khoa function: declaration function
function name(params) {

}
// c2: su dung bien duoc gan boi 1 function : expression function
const sum = function (params) {

}
// c3: du dung ham mui ten : arrow function
const add = (params) => {

}

//                             cac phuong thuc lam viec voi mang ES6
//                             cac phuong thuc lam viec voi mang ES6
//                             cac phuong thuc lam viec voi mang ES6

//          1_forEach();   dung de duyet mang.
//          1_forEach();   
//          1_forEach();
let arrInt = [1, 2, 3, 4, 5, 6]
arrInt.forEach((value, index, array) => {
    console.log("vong lap thu " + index);
    console.log("gia tri phan tu hien tai " + value);
    // khong can dung array[i]
    console.log("mang chi doc " + array);
})


//          2_reduce();   dung de ghi nho gia tri dau moi lan lap
//          2_reduce();   tinh tong cac so trong mang tren
//          2_reduce();   
let total = arrInt.reduce((sum, value, index, array) => {
    // bat buoc phai return(bat buoc tra ve gia tri cho bien sum)
    // sum = sum + value
    return sum + value
}, 0)
console.log(total);

// vi du reduce: tinh tong so chan trong mang。
let all = arrInt.reduce((sum, value, index, array) => {
    // c1:
    if (value % 2 == 0) {
        return sum + value
    }
    return sum;
    // c2: toan tu 3 ngoi
    // return value % 2 == 0 ? sum + value : sum;
}, 0)
console.log(all);


//          3_Map();   dung de tao ra mot mang moi co length bang mang da cho
//          3_Map();   nhung theo dieu kien nhat dinh
//          3_Map();
// vi du: so le tinh binh phuong , so chan chia het cho 2 ,cua tung phan tu trong mang.
let arrayPow = arrInt.map((value, index, array) => {
    // c1:
    if (value % 2 == 0) {
        return value / 2;
    }
    return value * value;
    // c2: toan tu 3 ngoi
    // return value & 2 == 0 ? value / 2 : value * value
})
console.log(arrayPow);


//          4_filter();   la bo loc, loc cac phan tu theo dieu kien xac dinh.
//          4_filter();
//          4_filter();
// vi du: loc cac phan tu lon hon 3
let arrayFilter = arrInt.filter((value, index, array) => {
    return value > 3
})
console.log(arrayFilter);
// vi du: loc nhung loai qua co chua ki tu "i"
let arrstring = ["tao", "vai", "nho", "oi", "mit"]
console.log(arrstring.includes("i"));
// vi du:
let aaa = arrstring.filter((value, index, array) => {
    return value.includes("i");
})
console.log(aaa);