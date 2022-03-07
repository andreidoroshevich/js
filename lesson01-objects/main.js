console.log(typeof {})
console.log(typeof [])
console.log(Array.isArray([]) )
console.log(typeof (()=>{}))


// const bob = {
//     name: "Bob",
//     age: 23,
//     isMarried: false,
//     friends: ['Alex', 'Ted', 'John']
// }


// const ted = bob // нет нового объекта, просто получаем доступ к элементам объекта bob
// ted.name = "Ted"
// console.log(ted)
// console.log(bob)



//способы создания нового объекта

// const ted = {} //создание через литерал ({} - литерал объекта), комагда для создания объекта
// ted.name = bob.name
// ted.age = bob.age
// ted.isMarried = bob.isMarried

// const ted = {...bob} //создать новый объект ted со значениями объекта bob, т.е. получаем копию/clone объекта bob
// // ... - синтаксис спред оператора, помещает содержимое объекта bob в объект ted
//
//
// console.log(ted === bob) // false, т.к разные объекты и лежат в разных местах, т.е сравниваем объекты
// console.log(ted.name === bob.name) // true, т.к. ключ и значение одинаковые, т.е сравниваем значения объектов

// const donald = {...bob} // поверхностное копирование (без учета внутренней структуры)
// donald.name = 'Donald'
// console.log(donald === bob) // false
// console.log(donald)
//
// bob.friends.push('Anna')
// console.log(bob)
// console.log(donald)


const bob = {
    name: "Bob",
    age: 23,
    isMarried: false,
    friends: ['Alex', 'Ted', 'John'], //лежит ссылочный тип данных
    tachnologies: ['HTML', 'JS/TS', 'CSS/SASS']
}

const donald = {...bob, friends: [...bob.friends], technologies: [...bob.tachnologies]}  // не перезаписываем, а создаем новый массив со значением из старого массива
bob.friends.push('Anna')
donald.name = 'Donald'
console.log(bob)
console.log(donald)

// По возможности (к след. воскресенью)
// 1. Написать функцию копирования простого объекта с помощью цикла for-in
// 2. Написать рекурсивную функцию копирования сложного объекта

// Обязательно к завтрашнему дню:









