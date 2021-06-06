// Задача 2

// "Счастливым" называют билет с номером, в котором сумма первой половины цифр равна сумме второй половины цифр. Номера могут быть произвольной длины, с единственным условием, что количество цифр всегда чётно, например: 33 или 2341 и так далее.

// Билет с номером 385916 — счастливый, так как 3 + 8 + 5 = 9 + 1 + 6. Билет с номером 231002 не является счастливым, так как 2 + 3 + 1 != 0 + 0 + 2.

// Реализуйте функцию, проверяющую является ли номер счастливым (номер — всегда строка). Функция должна возвращать true, если билет счастливый, или false, если нет.

// Примеры использования:

// isHappyTicket('638591'); // true

// isHappyTicket('231002'); // false

// isHappyTicket('1222'); // false

// isHappyTicket('054702'); // true

// isHappyTicket('00'); // true

const sumOfSquareDigits = (num) => {
    const numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i += 1) {
      const digit = Number(numAsStr[i]);
      sum += digit * digit;
    }
  
    return sum;
  };
  
  const isHappyNumber = num => {
    
    const iter = (num, count) => {
      if (count === 0) return false;
      
      const result = sumOfSquareDigits(num);
      if (result === 1) return true;  
      
      return iter (result, count-1);
      
    }
  
    return iter(num, 10);
  };
 console.log(isHappyNumber(638591));