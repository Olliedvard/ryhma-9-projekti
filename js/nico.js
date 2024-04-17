let kysymysnro = 1
let pisteet = 0
let prosentitmaara = 100
let aika = 60
let holdTimer; //Ajastin, joka mittaa, onko nappi painettu pohjaan.
let kysymys = ''
const minusbutton = document.getElementById('minusbutton')
const plusbutton = document.getElementById('plusbutton')
const minus10button = document.getElementById('minus10button')
const plus10button = document.getElementById('plus10button')
const prosentithtml = document.getElementById('prosentitmaara')
const ajastinON = setInterval(kysymysAjastin, 1000) //Ajastin on sekunneissa eli 1000 millisekuntia.

const minusPohjassa = () => {
    // Tämä tapahtuu, jos miinusnappia painetaan pohjassa ja prosentteja on enemmän kuin 0.
    if (prosentitmaara > 0) {
        prosentitmaara--;
        prosentithtml.innerHTML = prosentitmaara;
    }
}

const minus10Pohjassa = () => {
    //Tämä tapahtuu, jos miinus10nappia painetaan pohjassa, ja prosentteja on enemmän kuin 9.
    if (prosentitmaara > 9) {
        prosentitmaara = prosentitmaara-10
        prosentithtml.innerHTML = prosentitmaara
    }
}

const plusPohjassa = () => {
    // Tämä tapahtuu, jos plusnappia painetaan pohjassa.
    if (prosentitmaara < 200) {
        prosentitmaara++;
        prosentithtml.innerHTML = prosentitmaara;
    }
}

const plus10Pohjassa = () => {
    if (prosentitmaara < 191) {
        prosentitmaara = prosentitmaara+10
        prosentithtml.innerHTML = prosentitmaara
    }
}

function kysymysAjastin() {
    //Ajastimesta poistuu yksi sekunti sekunnin välein. (Sekunti määrätty ajastinONissa.) Kun ajastimessa on 0 sekuntia, aika päättyy.
    aika--;
    document.querySelector('#aika').innerHTML = aika;

    if (aika === 0) {
        clearInterval(ajastinON);
        alert('Aika loppui.');
    }
}

addEventListener("DOMContentLoaded", () => {
    alert('Jokaisessa kysymyksessä sinulta kysytään prosenttimäärää. Säädä prosenttimäärää 0-200 välillä painamalla plus- ja miinusnappeja pohjassa. Kun olet säätänyt prosenttimäärän mielestäsi oikeaksi vastaukseksi, paina "Vastaa." Aikaa on 60 sekuntia kysymystä kohden.')
    document.querySelector('#prosentitmaara').innerHTML = prosentitmaara
    document.querySelector('#pisteet').innerHTML = pisteet
    document.querySelector('#kysymysnro').innerHTML = kysymysnro
    document.querySelector('#aika').innerHTML = aika
    document.querySelector('#kysymys').innerHTML = kysymys
    kysymysAjastin()
})

minusbutton.addEventListener('click', () => {
    //Tämä funktio miinustaa prosenttimäärää yhden numeron verran painaessa miinusnappia.
    if (prosentitmaara > 0) {
        prosentitmaara = prosentitmaara - 1
        document.querySelector('#prosentitmaara').innerHTML = prosentitmaara
    }
})

minus10button.addEventListener('click', () => {
    //Tämä funktio miinustaa prosenttimäärää yhden numeron verran painaessa miinusnappia.
    if (prosentitmaara > 9) {
        prosentitmaara = prosentitmaara - 10
        document.querySelector('#prosentitmaara').innerHTML = prosentitmaara
    }
})

plusbutton.addEventListener('click', () => {
    //Tämä funktio lisää prosenttimäärään yhden numeron plusnappia kerran painettaessa.
    if (prosentitmaara < 200) {
        prosentitmaara = prosentitmaara + 1
        document.querySelector('#prosentitmaara').innerHTML = prosentitmaara
    }
})

plus10button.addEventListener('click', () => {
    //Tämä funktio lisää prosenttimäärään yhden numeron plusnappia kerran painettaessa.
    if (prosentitmaara < 191) {
        prosentitmaara = prosentitmaara + 10
        document.querySelector('#prosentitmaara').innerHTML = prosentitmaara
    }
})

minusbutton.addEventListener('mousedown', () => {
    //Kun nappia painetaan pohjassa, prosenttimäärää lasketaan yhdellä 100 millisekunnin välein.
    holdTimer = setInterval(minusPohjassa, 100)
})

minus10button.addEventListener('mousedown', () => {
    holdTimer = setInterval(minus10Pohjassa, 100)
})

minusbutton.addEventListener('mouseup', () => {
    clearInterval(holdTimer)
    //Kun napista päästetään irti, ajastin, joka mittaa napin painalluksen pituutta, resetoidaan.
})

minus10button.addEventListener('mouseup', () => {
    clearInterval(holdTimer)
})

plusbutton.addEventListener('mousedown', () => {
    //Kun nappia painetaan pohjassa, prosenttimäärää nostetaan yhdellä 100 millisekunnin välein.
    holdTimer = setInterval(plusPohjassa, 100)
})

plus10button.addEventListener('mousedown', () => {
    holdTimer = setInterval(plus10Pohjassa, 100)
})

plusbutton.addEventListener('mouseup', () => {
    clearInterval(holdTimer)
    //Kun napista päästetään irti, ajastin, joka mittaa napin painalluksen pituutta, resetoidaan.
})

plus10button.addEventListener('mouseup', () => {
    clearInterval(holdTimer)
})

minusbutton.addEventListener('mouseleave', () => {
    clearInterval(holdTimer)
    //Nappi ei jää pohjaan, jos hiiri poistuu napin päältä kesken painalluksen.
})

minus10button.addEventListener('mouseleave', () => {
    clearInterval(holdTimer)
    //Nappi ei jää pohjaan, jos hiiri poistuu napin päältä kesken painalluksen.
})

plusbutton.addEventListener('mouseleave', () => {
    clearInterval(holdTimer)
    //Nappi ei jää pohjaan, jos hiiri poistuu napin päältä kesken painalluksen.
})

plus10button.addEventListener('mouseleave', () => {
    clearInterval(holdTimer)
    //Nappi ei jää pohjaan, jos hiiri poistuu napin päältä kesken painalluksen.
})