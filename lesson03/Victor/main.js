const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

const onClickHandler = (e) => {
    e.stopPropagation()
    console.log(e.target.id)
    // target - где рождается событие (какой элемент сгенерировал событие)
    //currentTarget - где сейчас лежит событие (маленькая, средняя, большая),
    // через какой элемент в данный момент проходит событие
}

// sm.onclick = onClickHandler
// sm.onclick=null

sm.addEventListener('click', onClickHandler) //всплывающее
md.addEventListener('click', onClickHandler)//всплывающее
bg.addEventListener('click', onClickHandler)//всплывающее

// sm.addEventListener('click', onClickHandler, true) //true меняет на погружающееся
// md.addEventListener('click', onClickHandler, true)//true меняет на погружающееся
// bg.addEventListener('click', onClickHandler, true)//true меняет на погружающееся


// sm.addEventListener('click', ()=>alert('hey'))
// sm.removeEventListener('click', onClickHandler)