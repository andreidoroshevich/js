const people = [
    {name: "Andrew Ivanov", age: 33, budget: 50000},
    {name: "Alexander Petrov", age: 24, budget: 500},
    {name: "Dmitry Sidorov", age: 18, budget: 4000},
    {name: "Vasya Petrov", age: 24, budget: 40},
]

// for (let i=0; i < people.length; i++) {
//     console.log(people[i])
// }
//
// for (let person of people) {
//     console.log(person)
// }




// ForEach

// people.forEach(function (person, index,peopleArray)  {
//     console.log(person);
// })

// people.forEach(function (person)  {
//     console.log(person);
// })

people.forEach(person => console.log(person.name))

let copyPeople = []
people.forEach(person => copyPeople.push(person))
console.log(copyPeople)


//Map
// const newPeople = people.map(person =>{
//     return `${person.name} (${person.age})`
// })
// console.log(newPeople)

const newMapPeople = people.map(person =>`${person.name} (age: ${person.age})`)
console.log(newMapPeople)


//filter
// const adults = []
// for (let i=0; i < people.length; i++) {
//     if (people.age >= 18) {
//         adults.push(people[i]);
//     }
// }
// console.log(adults)

// adults = people.filter(person =>{
//     if (person.age >=18) {
//         return true
//     }
// })

// people - массив для итерации, filter - метод массива, person - каждый элемент массива, и условие итерации
adults = people.filter(person => person.age >=18)
console.log(adults)

//Reduce

// let amount = 0
// for (let i=0; i < people.length; i++) {
//     amount += people[i].budget
// }
// console.log(amount)

//total - перменная, people - массив для итерации, 0 - начальное значение переменной total
const amountBudget = people.reduce((total, person) => total + person.budget, 0)
const amountAge = people.reduce((total, person) => total + person.age, 0)

console.log(amountBudget)
console.log(amountAge)


//Find для поиска элемента по условию, получаем весь элемент массива

let andrew = people.find(person => person.name === "Andrew Ivanov")
console.log(andrew)

//FindIndex
let andrewIndex = people.findIndex(person => person.budget === 40)
console.log(andrewIndex)

//Совместное использование методов

const newPeopleArrAmountBudget = people
    .filter(person => person.budget > 40)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: person.budget,
        }

    })
    .reduce((total,person) => total + person.budget,0)
console.log(newPeopleArrAmountBudget)




// const elements = []

//перебираем исходный массив и создаем новый

// for (let i=0; i < people.length; i++) {
//     elements.push(`${people[i].name} : ${people[i].age}` );
//     }
// console.log(elements)

// const elements = people.map((people, i, objectOfPeopleArray) =>{
//     console.log(people, i, objectOfPeopleArray)
//     return `${people[i].name} : ${people[i].age}`
// })