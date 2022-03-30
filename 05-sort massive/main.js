//методы sort и reverse мутируют массив

const names = ["Bob", "Alex", "Donald", "John", "bob", "ann", 100, "Юра", "Алексей"]
console.log(names.sort())

// const numbers = [100, 333, 2, 9, 42, 1010]

// const compareFunc = (a, b) => {
//     if (a <= b) { // если менять ничего не надо
//         return -1 //вернуть любое отрицательное число
//     } else {
//         return 1 // если менять нужно, то возвращаем любое положительное число
//     }
//         }


const compareIncreaseFunc = (a, b) => a - b //возвращает отрицательное (переставляем числа местами) или положительное (менять не нужно)

//если нужно не мутировать исходный массив, то сортируем копию
// console.log([...numbers].sort(compareIncreaseFunc))
//
// console.log(numbers.sort(compareIncreaseFunc).reverse())

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 93
    },
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 125
    }
]

console.log(students.sort((a, b) => b.scores - a.scores))
console.log(students.sort((a, b) => a.age - b.age))
console.log(students.sort((a, b) => a.name <= b.name ? -1 : 1))
console.log(students.sort((a, b) => a.name.toUpperCase() <= b.name.toUpperCase() ? -1 : 1))


//сортируем по возрастанию - bubble sort (пузырьковая сортировка)

const numbers = [100, 333, 2, 9, 42, 1010, -9, 10]

for (let j = 0; j < numbers.length - 1; j++) {
    let isArraySorted = true
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        if (numbers[i] > numbers[i + 1]) {
            isArraySorted = false;
            // меняем местами два элемента массива
            // let temp = numbers[i + 1]
            // numbers[i+1] = numbers[i]
            // numbers[i] = temp

            [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]]
        }
    }
    if (isArraySorted) break
}

console.log(numbers)