// Задача 1

// Реализуйте и экспортируйте по умолчанию функцию, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

// Примеры:

// isPowerOfThree(1); // true (3^0)

// isPowerOfThree(2); // false

// isPowerOfThree(9); // true (3^2)



const isPowerOfThree = (num) => {
    const findPowerOfThree = (num) =>{
        if(num % 3 !== 0 || num <= 1) return 0;        
        return 1 + findPowerOfThree(num / 3);
    }
    return 3**findPowerOfThree(num) === num;
}
console.log(isPowerOfThree(9))