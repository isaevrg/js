// Задача 1


// Реализуйте (с использованием рекурсивного процесса) функцию, которая находит сумму последовательности целых чисел. 
// Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. 
// Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.
// sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
// sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49



// const sequenceSum = (begin, end) => {
//     if (begin > end) {
//         return NaN;
//     }
//     else if (begin === end) {
//         return begin;
//     }
//     return begin + sequenceSum(begin + 1, end);
// };

// console.log(sequenceSum(4, 10));

// Задача 2

// 1. Создайте ошибку типа type error.
// const sum = 5;
// console.log(sum(12));

// 2. Создайте ошибку типа reference error.
// const logic = 7;
// console.log(logik)

// 3. Создайте ошибку типа syntax error.
// const asd = (n) => {
//     return n + 1;{
// }:)


// 4. Создайте ошибку типа logic error.
const pi = 3.14;

const squareСircle = (radius) => {
    return pi * radius * 2;
};

console.log(squareСircle(3)); // 28,26
