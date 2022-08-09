//Câu 1
// let a = prompt("Nhập số ạ");
// let b = prompt("Nhập số b");
// if (a%b===0){
//     console.log("a chia hết cho b");
// }else{
//     console.log("a không chia hết cho b");
// }

//Câu 2
//Nhập tuổi để xem học sinh đó có đủ điều kiện học lớp 10
//đk để học lớp 10 là tuổi phải lớn hơn hoặc bằng 15

// let a = prompt("Nhập số tuổi");
// if (a>=15){
//     console.log("Đủ điều kiện học lớp 10");
// }else{
//     console.log("Không đủ điều kiện học lớp 10");
// }
//Câu 3
// let z = Number(prompt("Nhập số nguyên z"));

// if (z%1===0){
//   if (z>0) {
//     console.log("Số bạn vừa nhập lớn hơn không");
//   } else if (z===0) {
//     console.log("Số bạn vừa nhập bằng không");
//   } else {
//     console.log("Số bạn vừa nhập nhỏ hơn không");
//   }
// }else{
//     console.log("Số bạn nhập không phải số nguyên");
// }

//Câu 4
// let a = prompt("Nhập số nguyên a");
// let b = prompt("Nhập số nguyên b");
// let c = prompt("Nhập số nguyên c");

// if (a>b && a>c){
//     console.log("a là số lớn nhất");
// }else if (a<b && b<c){
//     console.log("c là số lớn nhất");
// }else if (b>a && b>c){
//     console.log("b là số lớn nhất");
// }else {
//     console.log("Không có số lớn nhất");
// }

//Câu 5
//Nhập điểm kiểm tra giữa kì và cuối kì
// let a = Number(prompt("Nhập điểm kiểm tra miệng"));
// let b = Number(prompt("Nhập điểm kiểm tra một tiết"));
// let c = Number(prompt("Nhập điểm kiểm tra giữa kì"));
// let d = Number(prompt("Nhập điểm kiểm tra cuối kì"));
// let tb = (a+b+c*2+d*3)/7;
// if (tb>=8.5 && tb<10){
//     console.log("Giỏi");
// }else if(tb>=6.5 && tb<8.5){
//     console.log("Khá");
// }else if(tb>=4.5 && tb<6.5){
//     console.log("Trung Bình");
// }else if (tb>=0 && tb<4.5){
//     console.log("Yếu");
// }else if (tb===10){
//     console.log("Xuất xắc");
// }else {
//     console.log("Xin mời nhập điểm đúng yêu cầu");
// }

//Câu 6
//rose money
// let r = Number(prompt("Mời nhập doanh thu sản phẩm bán dược tháng này"));
// let m = r*100000;
// if (r>0 && r<1000){
//     console.log("Tiền hoa hồng bạn nhận được "+(m*2)/100+" vnd");
// } else if (r>1000 && r<5000){
//     console.log("Tiền hoa hồng bạn nhận được "+(m*3)/100+" vnd");
// } else if (r===0){
//     console.log("Bạn không bán được hàng");
// }else if (r>=5000){
//     console.log("Tiền hoa hồng bạn nhận được là "+(m*5)/100+" vnd");
// }else {
//     console.log("Mời nhập đúng ");
// }


//Câu 7
// let weight = prompt("Nhập cân nặng");
// let height = prompt("Nhập chiều cao");
// let BMI = Number(weight)/(Number(height)*Number(height));
// if (BMI<18) {
//     console.log("Thiếu cân");
// }else if (BMI>=18.5 && BMI<25) {
//     console.log("Bình thường "+BMI);
// }else if (BMI>=25 && BMI<30) {
//     console.log("Thừa cân "+BMI);
// }else {
//     console.log("Béo quá! Giảm cân đi "+BMI);
// }