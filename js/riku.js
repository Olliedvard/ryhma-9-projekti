let rand_num1 = 0

const getRandomIntNumberInRange = (min,max) =>{
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () =>{
    rand_num1 = getRandomIntNumberInRange(1,12)**2
    document.querySelector('#num1').innerHTML = rand_num1
}

addEventListener("DOMContentLoaded", () =>{
    randomizeNumbers()
});

document.querySelector('button').addEventListener('click', () =>{
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = Math.sqrt(rand_num1)
    if (answer === correctAnswer){
        alert('Correct!')
    }   else {
        alert('Incorrect!')
    }

    randomizeNumbers()
    document.querySelector('input').value=''
})