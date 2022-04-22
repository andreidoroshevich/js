// let userName = 'Вася';
//
// function showMessage() {
//     userName = "Петя"; // (1) изменяем значение внешней переменной
//     let message = 'Привет, ' + userName;
//     console.log(message);
// }
//
// console.log(userName); // Вася перед вызовом функции
// showMessage();
// console.log(userName); // Петя, значение внешней переменной было изменено функцией
//
// function checkAge(age) {
//     if (age > 18) {
//         console.log(true);
//     } else {
//         return console.log('Родители разрешили?');
//     }
// }
//
// checkAge(18)
// checkAge(20)
//
//
// function checkAge(age) {
//     age > 18 ? console.log(true) : console.log('Родители разрешили?');
// }
//
// checkAge(18)
// checkAge(20)
//
//
// function checkAge(age) {
//     return (age > 18) || console.log('Родители разрешили?')
// }
//
// checkAge(18)
// checkAge(25)
//
//
// function min(a, b) {
//     return a < b ? a : b
// }
//
// console.log(min(2, 3))
//
// function pow() {
//     let x = prompt("Введите x", '')
//     let n = prompt("n?", '');
//     n % 1 == 0 ? console.log(x ** n) : console.log("Такая степень не поддерживается")
//
// }
//
// pow()
//
// let user = {}
// user.name = "John"
// user.surname = "Smith "
// user.name = "Pete"
// delete user.name
//
// console.log(user)
//
//
// function isEmpty(obj) {
//     for (let key in obj) {
//         console.log(false)
//     }
//     console.log(true)
// }
//
// isEmpty({})
// isEmpty({name: "John"})
//
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// let sum = 0
// for (let key in salaries) {
//     sum += salaries[key]
// }
// console.log(sum)
//
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == "number")
//             obj[key] = obj[key] * 2
//     }
// }
//
// multiplyNumeric(menu)
// console.log(menu)
//
// let id = Symbol("id");
// console.log(id.toString());
//
//
// function sumOfNumbers() {
//     let x = +prompt("Введите x", '')
//     let n = +prompt("n?", '');
//     console.log(x + n)
//
// }
//
// sumOfNumbers()
//


let arr = ["Я", "изучаю", "JavaScript"];
// с позиции 2
// удалить 0 элементов
// вставить "сложный", "язык"
arr.splice(2, 0, "сложный", "язык");
console.log(arr[2])
console.log(arr)

let array = ["Bilbo", "Gandalf", "Misha"]

array.forEach((item, index, array) => {
    console.log((`${item} имеет позицию ${index} в [${array}]`));
});

let array1 = [5, 3, 8, 1];

function filterRange(arr, a, b) {
    return array1.filter(el => el >= a && el <= b)
}


let filtered = filterRange(array1, 1, 4)
console.log(filtered)
console.log(array1)


let arr1 = [5, 2, 1, -10, 8]

arr1.sort((a, b) => b - a)
console.log(arr1)


let arr2 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    let newArr2 = [...arr]
    return newArr2.sort()
}

let sorted = copySorted(arr2)

console.log(sorted)
console.log(arr2)


function gimme(triplet) {
    // let newArr=[...triplet]
    // let sortedArr = newArr.sort((a, b) => a - b)
    // let middleElem = sortedArr[1]
    // let indexMiddleElem = triplet.indexOf(middleElem)
    // return indexMiddleElem

    return triplet.indexOf([...triplet].sort((a, b) => a - b)[1])
}

console.log(gimme([2, 1, 3]))

function longest(s1, s2) {
    return [...new Set(s1.split('').concat(s2.split('')))].sort().join('')
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))
