// 1. Viết function in ra câu “Xin chào Rikkei Academy”
// function inXinChao() {
//     console.log("Xin chao RA");
// }
// inXinChao()



// 2. Viết function tính bình phương của một số
// function tinhBinhPhuong(number) {
//     return Math.pow(number, 2)
// }
// console.log(tinhBinhPhuong(4));
// console.log(tinhBinhPhuong(8));
// console.log(tinhBinhPhuong(0));



// 3. Viết function tính thế kỷ của một năm nhập vào từ bàn phím.Biết thế kỷ
// thứ nhất tính từ năm 1 đến 100
// function tinhBinhPhuong(number) {
//     return Math.pow(number, 2)
// }
// console.log(tinhBinhPhuong(4));
// console.log(tinhBinhPhuong(8));
// console.log(tinhBinhPhuong(0));



// 4. Cho chuỗi dài hơn 15 ký tự, viết function cắt chuỗi, lấy ra 10 ký tự đầu
// tiên và thêm vào dấu “…” ở cuối chuỗi
// let chuoi = prompt("Nhap chuoi")
// function inChuoi(chuoi) {
//     if (chuoi.length < 15) {
//         console.log(chuoi);
//     } else {
//         // hàm slice áp dụng cho chuỗi, slice có chức năng cắt chuỗi từ vị trí nào và muốn cắt bao nhiêu
//         // VD: let chuoi = "mot chuoi rat la dai"
//         // VD: chuoi.slice(0, 15): cắt từ vị trí 0 và cắt 15 phần tử ==> "mot chuoi rat l"
//         // VD: chuoi.slice(5, 2): cắt từ vị trí 5 và cắt 2 phần tử ==> "uo"
//         chuoi = chuoi.slice(0, 15)
//         console.log(chuoi + "...");
//     }
// }
// inChuoi(chuoi)



// 5. Viết function chuẩn hóa một từ - chỉ viết hoa chữ cái đầu tiên.Ví dụ:
// “rIkKEi” sau khi chuẩn hóa thành “Rikkei”
// let chuoi = prompt("Nhap chuoi can chuan hoa")
// function chuanHoa(chuoi) {
//     let chuoiRong = ""
//     for (i = 0; i < chuoi.length; i++) {
//         if (i == 0) {
//             chuoiRong += chuoi[i].toUpperCase()
//         } else if (chuoi[i] == " " && chuoi[i + 1] != " ") {
//             chuoiRong += " "
//             chuoiRong += chuoi[++i].toUpperCase()
//             i++;
//         } else {
//             chuoiRong += chuoi[i].toLowerCase()
//         }
//     }
//     return chuoiRong
// }
// const value = chuanHoa(chuoi)
// console.log(value);



// 6. Viết function trả ra giá trị lớn nhất trong một mảng số
// let arr = [3, 6, 9, 34, 67, 45]
// console.log(Math.max(...arr));



// 7. Viết function kiểm tra số chẵn - lẻ, nguyên tố, hoàn hảo
//kiem tra chan le:
// function checkIn(num) {
//     if (num % 2 == 0) {
//         console.log("la so chan");
//     } else if (num % 2 !== 0) {
//         console.log("la so le");
//     }
// }
// console.log(checkIn(7));

// //kiem tra co la snt:
// function kiemTra(number) {
//     flag = true;
//     if (number % 2 == 0) {
//         flag = false;
//     }
//     if (flag) {
//         console.log("la so ngyen to");
//     } else {
//         console.log("khong la so nguyen to");
//     }
//     return number;
// }
// console.log(kiemTra(11));

//kiem tra so hoan hao:
// function soHoanHao(n) {
//     let sum = 0;
//     for (let i = 1; i < n; i++) {
//         if (n % i === 0) {
//             sum += i;
//         }
//     }
//     return sum === n;
// }
// console.log(soHoanHao(6));
// console.log(soHoanHao(28));
// console.log(soHoanHao(496));
// console.log(soHoanHao(8128));
// console.log(soHoanHao(10));



// 8. Viết function trả ra trung bình cộng của một mảng số
// Trung bình cộng = TỔNG CÁC SỐ chia SỐ CÁC SỐ HẠNG
// function tinhTrungBinhCong(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     let ketQua = sum / array.length;
//     return ketQua;
// }
// let soNguyen = [1, 2, 3, 4, 5, 6];
// let tBc = tinhTrungBinhCong(soNguyen);
// console.log("trung binh cong cua mang la " + tBc);



// 9. Nhập vào một số n, in ra n số nguyên tố tăng dần
// function isPrime(num) {
//     if (num < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// function snt(n) {
//     let Count = 0;
//     let num = 2;
//     while (Count < n) {
//         if (isPrime(num)) {
//             console.log(num);
//             Count++;
//         }
//         num++;
//     }
// }
// console.log(snt(10));