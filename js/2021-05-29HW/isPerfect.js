// Задача 3

// Создайте функцию isPerfect(), которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.

// Совершенное число — положительное целое число, равное сумме его положительных делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.

// Совершенное число (википедия)
// Список совершенных чисел

const isPerfect = (num) => {
    const iter = (acc, divider) => {
      if (acc >= num) return acc;
      if (num % divider === 0) {
        return iter(acc + divider, divider + 1);
      }
      return iter(acc, divider + 1);
    };
    if (num < 1) return false;
    return iter(0, 1) === num;
  };
  
  console.log(isPerfect(6));