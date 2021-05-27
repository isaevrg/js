// const getAbs = num => {
//     if (num >= 0) {
//         return num;
//     } else {
//         return -num;
//     }
// }
// console.log (num)

// Задача 1


// Реализуйте (с использованием рекурсивного процесса) функцию, которая находит сумму последовательности целых чисел. 
// Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. 
// Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.
// sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
// sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49

// const sequenceSum = (begin, end) => {

// }

// const f = x => x ** x;

// const y = 5;
// console.log(f(y)); // 25

// const z = 3;
// console.log(f(z)); // 9

// const someFunction = (x) => {
//     return 10 * 42;
//   };
  
//   const y = someFunction(9281);

// const square = (x) => {
//     return x * x;
// };

// const firstNum = 10;
// const secondNum = 5;

// const sum = (z, g) => z + g;

// // sum(firstNum, secondNum);

// const squareOfSum = (a, b) => a ** 2 + 2 * a * b + b ** 2;
// console.log(squareOfSum(2, 3));

// // функция-предикат определяет, является ли число num четным
// const isEven = num => num % 2 === 0;
// // функция увеличивает полученное число num на 10
// const increaseNum = num => num + 10;

// const num = 6;
// const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;
// console.log(result)

// const testScore = 10;
// const result = testScore < 10 ? 'bad' : 'good';
// console.log(result);

// const getColour = colour => (colour === 'white' ? 'white' : 'black');
// console.log(getColour('white'))


// Задача 1


// Реализуйте (с использованием рекурсивного процесса) функцию, которая находит сумму последовательности целых чисел. 
// Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. 
// Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.
// sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
// sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49


// Подсказки
// * Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является "пустой". 
// Вычислить сумму чисел такой последовательности не представляется возможным, в этом случае возвращаем NaN
// * Сумма чисел последовательности, в которой begin === end, равна begin (или end)


// const sequenceSum = (begin, end) => {
//     if (begin > end) {
//         return NaN;
//     }
//     else if (begin === end) {
//         return begin;
//     }
//     return begin + sequenceSum(begin + 1, end);
// };

// console.log(sequenceSum(1, -5));


const pi = 3.14;

const squareСircle = (radius) => {
    return pi * radius ** 2;
};

console.log(squareСircle(3)); // 28,26