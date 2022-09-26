let myInterval
const buttons = document.querySelectorAll('button')
const timeBoard = document.getElementById('time')
const timeOut = document.querySelector('span')
const input = document.querySelector('input')

function countDown(time) {
    //* the end time =>
    const now = Date.now()
    const then = now + Number(time) * 1000
    endTime(then)

    // if there are any interval clear it
    clearInterval(myInterval)

    myInterval = setInterval(() => {
        if (time === 0) return clearInterval(myInterval)
        time -= 1
        let min = Math.floor(time / 60)
        if (min < 10) min = '0' + min //* To display '00:00'
        let sec = time - (min * 60)
        if (sec < 10) sec = '0' + sec //* To display '00:00'
        timeBoard.innerHTML = `${min}:${sec}`
        document.title = `${min}:${sec}`
    }, 1000);
}

function endTime(time) {
    const end = new Date(time)
    let hour = end.getHours()
    if (hour > 12) hour -= 12 // to make system 12 o'clock
    if (hour < 10) hour = '0' + hour // '02'
    console.log(hour)
    let min = end.getMinutes()
    if (min < 10) min = '0' + min // '03'
    let sec = end.getSeconds()
    if (sec < 10) sec = '0' + sec // '05'

    timeOut.innerText = `${hour}:${min}:${sec}`

}


buttons.forEach(button => {
    button.addEventListener('click', () => {
        countDown(button.value)
    })
});

input.addEventListener('change', () => {
    countDown(input.value * 60)
})

