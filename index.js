const buttons = document.querySelectorAll('button')
const userInput = document.querySelector('#amount')
const timeBoard = document.querySelector('#time')
const hiddenOne = document.querySelector('#hidden-one')


userInput.addEventListener('input', () => {
    timer(userInput)
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        timer(button)
    })
})


function timer(button) {
    timeBoard.innerText = `${button.value}`
    hiddenOne.innerHTML = `${button.value}`
    let myInterval = setInterval(() => {
        const min = Number(hiddenOne.innerHTML.split(':')[0])
        const sec = Number(hiddenOne.innerHTML.split(':')[1])

        let totalSeconds = (min * 60) + sec
        totalSeconds = totalSeconds - 1
        
        let nMin = (totalSeconds - sec) / 60
        if (nMin <= 0) nMin = 0

        let nSec = Math.round(totalSeconds - (min * 60))
        if (nSec < 0) nSec = 60
        if (nSec < 0 && nMin < 0) nSec = 0
        
        if (totalSeconds <= 0) {
            clearInterval(myInterval)
        }
        
        hiddenOne.innerText = `${nMin} : ${nSec}`
        timeBoard.innerText = `${Math.floor(nMin)} : ${nSec}`
        // console.log(`${nMin} : ${nSec}`)
        
    }, 1000);
}