// объект - тип данных, с помощью которого представляют связанный набор данных

// const user = {
//     name: 'Vasya', // ключ (property) - значение
//     married: false,
//     age: 28, 
// };

// const rectangle = { width: 10, height: 5};

// console.log(user.name);
// console.log(rectangle.width);


// ссылки
// Сравнение объектов (объекты равны между собой не тогда когда у них одинаковая структура, а когда это один и тот же объект)


// более распространеный способ Object.keys(obj) - позволяет получить массив всех ключей объекта
// const course = { name: "Javascript", slug: "js-vanilla", };
// const keys = Object.keys(course);
// console.log(keys);
// for (const key of keys) {
//     console.log(course[key]);
// }
// если ключи в процессе обхода не используются, то можно сразу получить массив значений св-в объекта.
// const course = { name: "Javascript", slug: "js-vanilla", };
// const values = Object.values(course); 
// // console.log(values); // [ "Javascript", "js-vanilla" ]
// for (const value of values) {
//     console.log(value);
// }
// возврат ключей и значений объекта (Object.entries(obj)) // [key, value]
// const course = { name: "Javascript", slug: "js-vanilla", };
// const entries = Object.entries(course);
// console.log(entries); // [ ['name', 'Javascript' ], ['slug', 'js-vanilla'] ]
// for (const [key, value] of entries) {
//     console.log(key);
//     console.log(value);
// }

// реализовать функцию, которая возвращает список ключей объекта, значение которых равно переданному значению:
const lessonMembers = {
    syntax: 3,
    using: 2,
    foreach: 10,
    operations: 10,
    destructing: 2,
    array: 2,
};
// findKeys(lessonMembers, 10); // ['foreach', 'operations']
// findKeys(lessonMembers, 3); // ['syntax']

const findKeys = (obj, val) => {
    const result = [];
    const entries = Object.entries(obj);
    for (const [key, value] of entries){
        if (value === val) {
            result.push(key);
        }
    }
    return result;
};

console.log(findKeys(lessonMembers, 10))