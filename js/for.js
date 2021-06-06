// const factorial = n => {
//     let result = 1;
//     for (let counter = 1; counter <= n; counter ++) {
//         result *= counter;
//     }
//     return result;
// }

// console.log(factorial(3));


// можно и так
// let counter = 1;
// for (; counter <= n; counter++) {
//     //любой код
// }


// Напишите функцию, которая принимает число и возвращает true, если число является простым, и false в ином случае.
// простое число - целое положительное число, имеющее ровно два различных натуральных делителя - единицу и самого себя. 7 - простое число, т.к. делится только на 1 и на себя. 
// someFunction(1); // false
// someFunction(7); // true
// someFunction(10); // false


// const simpleNumber = n => {
//     if (n < 2) {
//         return false;
//     }
//     for (let counter = 2; counter <= n / 2; counter ++) {
//         if (n % counter === 0) {
//             return false;
//         }
//     }
//     return true
// }

// console.log(simpleNumber(10));

// Fizz и Buzz
// Функцию, которая выводит в терминал числа в диапазоне от begin до end. При этом:
// - если число делится без остатка на 3, то вместо него выводится слово Fizz.
// - если число делится без остатка на 5, то вместо него выводится слово Buzz.
// - если число делится без остатка и на и на 5, то вместо него выводится слово FizzBuzz.
// - в остальных случаях выводится само число.


// const someFog = (begin, end) => {
//     for (begin; begin <= end; begin++) {
//         if (begin % 15 === 0) {
//             console.log("FizzBuzz")
//         }
//         else if (begin % 3 === 0)
//     } 
// }


// Функцию, которая переворачивает цифры в переданном числе и возвращает новое число.
// reverseInt(13); // 31
// reverseInt(-123); // -321


// Функцию ,  которая   принимает   число   и ..., автор: Филимонов Илья

// Филимонов Илья6:32 PM
// Функцию, которая принимает число и возвращает true, если оно совершенное, и false в ином случае.
// Совершенное число - положительное целое число, равное сумме его положительных делителей (не считая само число). 
// 6 - идеальное число, т.к. 6 = 1 + 2 + 3.


// Задача. функцию, которая меняется местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть.
// swap([]); // []
// swap([1, 2]); // [2, 1]

// const swapElen = arr => {
//     let x = 0;
//     for (i = 0; i < arr.lenght; i++)
//         if (arr.length < 2) {
//         return arr;
//     }
//     else {
//         arr[0] = arr[arr.length - 1]
//     }
//     return arr
// }
// console.log(swapElen);


// const items = [ 3, 8, 1 ];

// console.log(items);
// items.reverse();
// console.log(items);

// Задача функцию, которая принимает на вход массив и строковой префикс и возвращает новый массив, в котором каждому элементу исходного массива добавляется префикс. функция предназначена для работы со строковыми элементами. Для префикса автоматически добавляется пробел.

// const names = ['john', 'smith', 'karl']; // ['Mr john', 'Mr smith', 'Mr karl'];

// const addPrefix = (array, prefix) => {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray += `${prefix} ${array[i]}`;
//     }
//     return newArray;
// }

// console.log(addPrefix(names, 'Mr'));

// Написать функцию, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3.
// const names = [8, 9, 21, 19, 18, 22, 7];
// myFunction(names); // 48
// const names2 = [2, 0, 17, 3, 9, 15, 4];
// myFunction(names2); // 27
// const names3 = [];
// myFunction(names3); // 0

// const sumElements = (arr) => {
//     let arrayLength = arr.length;
//     const sum = 0;
//     if (arrayLength === 0) {
//         return 0;
//     }
//     else {
//         for (let i=0; i < arrayLength; i++) {
//             if (arr[i] % 3 === 0) {
//                 sum += arr[i];
//             }
//         }
//         return sum;
//     }
// }

// const names = [8, 9, 21, 19, 18, 22, 7];

// console.log(sumElements)

// Задача 1

// Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

// Примеры:

// isPowerOfThree(1); // true (3^0)

// isPowerOfThree(2); // false

// isPowerOfThree(9); // true (3^2)

// const isPowerOfThree = n => {
//     if (n % 3 === 0 || n === 1) {
//         return 'true'
//     }
//     else if (n % 3 != 0) {
//         return 'false'
//     }
// };

// console.log(isPowerOfThree(27));

const ackermann = (m, n) => {
    if (m > 0 && n > 0) return ackermann(m - 1, ackermann(m, n - 1));
    if (m > 0 && n === 0) return ackermann(m - 1, 1);
    if (m === 0) return n + 1;
  };
  
 console.log(ackermann(0,0));