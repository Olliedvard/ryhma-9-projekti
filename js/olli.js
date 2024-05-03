
let rand_num1 = 0
let rand_num2 = 0


const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1,10)
    rand_num2 = getRandomIntNumberInRange(1,10)
    console.log(rand_num1,' * ', rand_num2,' = ' ,rand_num1*rand_num2)

    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2*10
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
    document.querySelector('#oikein').innerHTML = oikein
    document.querySelector('#vaarin').innerHTML = vaarin
})

document.querySelector('button').addEventListener('click',() => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 * rand_num2*10
    if (answer === correctAnswer) {
        alert('Oikein!')
        oikein++
    } else {
        alert('Väärin!')
        vaarin++
    }

    randomizeNumbers()
    document.querySelector('input').value=''
})
