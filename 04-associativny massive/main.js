const todoListID_1 = '53jf-65hg'
const todoListID_2 = '43jf-01jk'


const todoLists = [
    {
        id: '53jf-65hg',
        title: 'What to learn',
        filter: 'All',
    },
    {
        id: '43jf-01jk',
        title: 'What to buy',
        filter: 'All',
    },
]

const tasks = {
    [todoListID_1]: [
        {title: 'HTML', isDone: true},
        {title: 'CSS', isDone: true},
        {title: 'React', isDone: false},
    ],
    [todoListID_2]: [
        {title: 'Water', isDone: true},
        {title: 'Bread', isDone: true},
        {title: 'Monitor', isDone: false},
    ]
}

console.log(tasks[todoListID_1][2].title)
console.log(tasks['53jf-65hg'][2].title)


//метод массива reduce

const arr = [1, 2, 3, 4, 5, 6]

console.log(arr.reduce((sum, el) => sum + el, 0)) //- сумма элементов массива
console.log(arr.reduce((max, el) => max > el ? max : el)) //- поиск максимального значения массива

const people = [
    {name: "Andrew Ivanov", age: 33, budget: 50000, isMarried: true},
    {name: "Alexander Petrov", age: 24, budget: 500, isMarried: false},
    {name: "Dmitry Sidorov", age: 18, budget: 4000, isMarried: true},
    {name: "Vasya Petrov", age: 24, budget: 40, isMarried: false},
]

console.log(people.reduce((acc, man) => acc + man.budget, 0)) //acc - аккумулятор (собирает/аккумулирует), нужно начальное значение задать 0, чтобы acc определился как number
console.log(people.reduce((acc, man) => acc + man.age, 0))
console.log(people.reduce((acc, man) => acc  + man.name + ' - ' , ''))
console.log(people.reduce((acc, el)=> {
if (!el.isMarried) {
    acc.push(el)
}
return acc
},[]))




console.log(people.reduce((newObj,el)=>{
    newObj[el.name]=el.age
    return newObj
},{}))