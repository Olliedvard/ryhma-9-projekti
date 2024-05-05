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
    alert('Potenssipeli. Saat oikeasta vastauksesta yhden pisteen. Aloita peli painamalla ok.')
    randomizeNumbers()
})

document.querySelector('#vastaus').addEventListener('click',() => {
    const vastaus = Number(document.querySelector('#inputti').value)
    const oikeavastaus = rand_num**num2
    console.log(oikeavastaus)
    console.log(vastaus)
    if (vastaus === oikeavastaus) {
        
        oikein++
    } else {
        alert('Väärin!')
        vaarin++
    }

    document.querySelector('#oikein').innerHTML = oikein
console.log(input.value)
input.value=""
randomizeNumbers()
})

