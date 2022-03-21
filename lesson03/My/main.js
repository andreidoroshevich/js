// обработчик(handler), слушатель(listener), подписчик(subscriber) - some function
//function({.....}) - объект со сведениями о произошедшем событии
//event, ev, e - объект со сведениями о произошедшем событии (этот объект формирует браузер)


const sm = document.getElementById("small")
const md = document.getElementById("middle")
const bg = document.getElementById("big")
const onClickHandler1 = (e) => {
    if (e.offsetX<20 && e.offsetY<20) {
        alert("yo!")
    }
}
const onClickHandler2 = () => alert("hey!")
const onClickHandler3 = (e) => console.dir(e)
const onClickHandler4 = (e) => console.dir(e.currentTarget)
const onClickHandler5 = (e) => {
    e.stopPropagation()
    if(e.currentTarget.id === "small") {
        alert(e.currentTarget.id)
    }
}

sm.onclick = onClickHandler1
sm.onclick = onClickHandler2 // свойство объекта начинается с on - onClick, само событие называется просто click
sm.onclick = null //сбросить onclick (отключить)


sm.addEventListener("click", onClickHandler2)
// md.addEventListener("click", onClickHandler4)
// bg.addEventListener("click", onClickHandler4)
bg.addEventListener("click", onClickHandler5)


// bg.addEventListener("click", onClickHandler4, true) //
// // sm.addEventListener("click", onClickHandler1) //создади новую сущность onClickHandler({}), доступа к которой не имеем и не можем отменить
// // sm.removeEventListener("click", onClickHandler2)

// отличия addEventListener от onclick
//1. можно повесить несколько обработчиков, которые не перезатирают друг друга
//2. можно изменить модель обработки событий - третий параметр (true - погружение, false - всплывающий (bubble))