const input = document.getElementById("inputti")

let rand_num = 0
let num2 = 2

oikein = 0
vaarin = 0

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num = getRandomIntNumberInRange(1,10)
    
    console.log(rand_num,' ** ', num2,' = ' ,rand_num**num2)

    document.querySelector('#num1').innerHTML = rand_num
    document.querySelector('#num2').innerHTML = num2
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
})

document.querySelector('#vastaus').addEventListener('click',() => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num**num2
    console.log(correctAnswer)
    if (answer === correctAnswer) {
        alert('Oikein!')
        oikein++
    } else {
        alert('Väärin!')
        vaarin++
    }

    

console.log(input.value)
input.value=""
randomizeNumbers()
})
