// LAB3
// const role = prompt("Input ADMIN");
// let checkPermission = function (role, a, b) {
//   if (a(role)) {
//     return a;
//   } else {
//     b(role);
//   }
// };
// let a = function () {
//   if (role === "ADMIN") {
//     alert("ACCESS GRANTED");
//   }
// };
// let b = function () {
//   if (role !== "ADMIN") {
//     alert("ACCESS DENIED");
//   }
// };
// checkPermission(role, a, b);

// LAB4
// function magic() {
//   return function (x) {
//     return x * 42;
//   };
// }
// const answer = magic();
// console.log(answer); // *ƒ (x) {return x * 42;} เพราะกำหนดให้ anser=functionโดยไม่ได้ส่งค่าอะไรให้ฟังก์ชั่น
// console.log(answer(1337)); // **56154 เพราะส่งค่า1337ไปแทนxในฟังก์ชั่น
// console.log(magic(1337)(42)); // ***1764 เพราะส่งไป2ค่าจึงlogออกมาเป็นค่าหลัง
