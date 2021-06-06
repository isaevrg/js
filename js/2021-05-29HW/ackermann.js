// Задача 4

// Функция Аккермана — простой пример вычислимой функции, которая не является примитивно рекурсивной.

// Она обозначается A(m,n), принимает два неотрицательных целых числа в качестве параметров и возвращает натуральное число. Эта функция растёт очень быстро, например, число A(4,4) настолько велико, что количество цифр в порядке этого числа многократно превосходит количество атомов в наблюдаемой части Вселенной.

// Функция Аккермана определяется рекурсивно для неотрицательных целых чисел m и n следующим образом:

// https://i.imgur.com/NTlMEQb.png

// Справа в формуле указаны условия при которых выполняются расчёты.

// Реализуйте функцию Аккермана.

// Примеры использования:


// ackermann(0, 0); // 1

// ackermann(2, 1); // 5

// ackermann(2, 3); // 9


const ackermann = (m, n) => {
    if (m > 0 && n > 0) return ackermann(m - 1, ackermann(m, n - 1));
    if (m > 0 && n === 0) return ackermann(m - 1, 1);
    if (m === 0) return n + 1;
  };
  
 console.log(ackermann(0,0));