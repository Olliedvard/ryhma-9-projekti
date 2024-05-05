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
    //Arvotaan kantaluku 1-10 väliltä
    console.log(rand_num,' ** ', num2,' = ' ,rand_num**num2)

    document.querySelector('#num1').innerHTML = rand_num
    document.querySelector('#num2').innerHTML = num2
}

addEventListener("DOMContentLoaded", () => {
    parhaatpisteet = Number(sessionStorage.getItem("pisteetpotenssi"))
    randomizeNumbers()
    //sivu latautuu heti kun se avataan
})

document.querySelector('#vastaus').addEventListener('click',() => {
    const vastaus = Number(document.querySelector('#inputti').value)
    const oikeavastaus = rand_num**num2
    console.log(oikeavastaus)
    console.log(vastaus)
    if (vastaus === oikeavastaus) {
        oikein++
    } else {
        vaarin++
    }
    if (oikein + vaarin === 6) {
        peliOhi() //peli loppuu, kun pelaaja on vastannut kuuteen tehtävään
    }

    document.querySelector('#oikein').innerHTML = oikein

console.log(input.value)
input.value="" //Vastauskenttä tyhjentyy
randomizeNumbers()
})

const peliOhi = () => {
    alert('Peli ohi! Sait '+oikein+' pistettä.')
    if (oikein > parhaatpisteet) {
        
        parhaatpisteet = oikein
        sessionStorage.setItem("pisteetpotenssi", parhaatpisteet.toString())
        //parhaat pisteet tallentuvat pisteet-sivulle
    }
    document.getElementById('vastaus').remove() //vastausnappi postuu näkyvistä pelin päätyttyä
}