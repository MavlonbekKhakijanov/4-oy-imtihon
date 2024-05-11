// 1-masala
// let str = "To be or not to be ";
// function remove(str, value) {
//   let result = str.replace(value, "");
//   return result;
// }
// console.log(remove(str, "not"));
// 2-masala;
// let word = "<div>";
// let unbracketTag = (str) => {
//   let newWord = "";
//   for (let i = 1; i < str.length - 1; i++) {
//     newWord += str[i];
//   }
//   return newWord;
// };

// console.log(unbracketTag(word));

// 3-masala
// let isPrime = (n) => {
//   if (n < 1) {
//     return false;
//   }
//   for (let i = 2; i < Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isPrime(15));

// 4-masala;
// let countryAndCity = [
//   { country: "Belarus", city: "Brest" },
//   { country: "Russia", city: "Omsk" },
//   { country: "Russia", city: "Samara" },
//   { country: "Belarus", city: "Grodno" },
//   { country: "Belarus", city: "Minsk" },
//   { country: "Poland", city: "Lodz" },
// ];
// function group(arr) {
//   let result = arr.reduce((acc, val) => {
//     if (acc[val.country]) {
//       acc[val.country].push(val.city);
//     } else {
//       acc[val.country] = [val.city];
//     }
//     return acc;
//   }, {});

//   return result;
// }
// console.log(group(countryAndCity));

// 5-masala
// const getSumBetweenNumbers = (n1, n2) => {
//   let sum = 0;
//   for (let i = n1; i <= n2; i++) {
//     sum += i;
//   }
//   return sum;
// };
// console.log(getSumBetweenNumbers(5, 10));

// 6-masala
// let arr = [7, 5, 6, 1, 5, 7, 5];
// function getElementsOneTime(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let counter = 0;
//     for (let k = 0; k < arr.length; k++) {
//       if (arr[i] === arr[k]) {
//         counter++;
//       }
//     }
//     if (counter === 1) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(getElementsOneTime(arr));

// 7-masala
// let arr = [1, 2, 2, 3, 4, 5, 5];
// function deleteSameNum(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) === -1) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// let resultArr = deleteSameNum(arr);
// console.log(resultArr);

// 8-masala
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let k = 4;
// let m = 8
// function delate(arr, k, m) {
//   let result = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (i < k || i > m) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// console.log(delate(arr, k, m));

// 9-masala;
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// let allReady = books.filter((item) => item.alreadyRead === true);
// let allReadyNo = books
//   .filter((item) => item.alreadyRead === false)
//   .forEach((item) => {
//     console.log(`${item.author}ning ${item.title} asari o'qilmagan`);
//   });
// let oqilgan = `${allReady[0].author}ning ${allReady[0].title} asari o'qilgan`;
// console.log(oqilgan, allReadyNo);
// 10-masala
// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let narx = products.reduce((acc, val) => {
//   acc += val.price;
//   return acc;
// }, 0);

// let chegirma = products.reduce((acc, val) => {
//   acc += val.discount;
//   return acc;
// }, 0);

// let result = narx - chegirma;
// console.log(result);
