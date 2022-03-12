//метод - это функция, которая позволяет взаимодействовать с объектом (менять, получать значения)
//массив - это объект, в нем лежит пара ключ - значение
// map: возвращает новый массив с таким же количеством элементов, принимает callback
//callback - это функция, которая используется каким-то кодом (таймер, метод массива и т.д.)
// вызывается столько раз, сколько элементов в массиве

let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 89,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    },
]


//Map

let studentsName = students.map(student => student.name)
console.log(studentsName)

function myMap(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i]);
    }
    return newArray
}
console.log(myMap(students, student => student.name))




//filter (возвращает новый массив, лежат точно такие же элементы исходного массива, которые удовлеторяют условию фильтрации)

let studentsScore = students.filter(student => student.scores >= 100)
console.log(studentsScore)

//через if

function myFilter(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray
}
console.log(myFilter(students, student => student.scores >= 100))


//через тернарник ?

function myFilter1(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        callback(array[i]) ? newArray.push(array[i]) : null
    }
    return newArray
}
console.log(myFilter1(students, student => student.scores >= 100))


//Find - возвращает первый элемент массива, который удовлетворяет условию

console.log(students.find(student => student.name === "Bob"))


function myFind(array, callback) {
    for (let i=0; i < array.length; i++) {
        if(callback(array[i])) {
            return array[i];
        }
    }
}

console.log(myFind(students, student => student.name === "Bob"))

//FindIndex

console.log(students.findIndex(student => student.name === "John"))
function myFindIndex(array, callback) {
    for (let i=0; i < array.length; i++) {
        if(callback(array[i])) {
            return i;
        }
    }
}

console.log(myFindIndex(students, student => student.name === "John"))



