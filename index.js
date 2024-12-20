// 1
let time1 = 0
const interval1 = setInterval(()=> {
    alert('вивела повідомлення кожну секунду')
    time1++
    if (time1 === 5) {
        clearInterval(interval1)
    }
},1000)

// 2

const box1El = document.querySelector('.box1') 
const box2El = document.querySelector('.box2') 

let  marginBox = 10
setInterval(() => {
    box1El.style.marginLeft = marginBox ++ + 'px'

    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    box2El.style.backgroundColor = `rgb(${red},${green},${blue})`
},500)

// 3

// const gameBtnEl = document.querySelector('.game-btn')
// const counterTextEl = document.querySelector('.counter')

// let counter = 0

// gameBtnEl.addEventListener('click', () => {
//     setInterval(() => {
//         console.log(counter)
        
//     },1000)

//     counter++
//     counterTextEl.textContent = counter
//     console.log(counter)
// })

// 4

const inputTime = document.querySelector('.input-time')

inputTime.addEventListener('change', () => {
    const time4 = inputTime.value
    setTimeout(() => {
        alert(`це повідомлення прийшло через ${time4} секунд`)
    },time4)
    inputTime.value = ''
})
