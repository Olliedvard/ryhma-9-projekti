let kysymysnro = 1
let pisteet = 0
let prosentitmaara = 100
let aika = 45
let holdTimer; //Ajastin, joka mittaa, onko nappi painettu pohjaan.
let kysymys = "Kysymys tulee tähän."

const minusbutton = document.getElementById('minusbutton')
const plusbutton = document.getElementById('plusbutton')
const prosentithtml = document.getElementById('prosentitmaara')
const ajastinON = setInterval(kysymysAjastin, 1000) //Ajastin on sekunneissa eli 1000 millisekuntia.

const minusPohjassa = () => {
    // Tämä tapahtuu, jos miinusnappia painetaan pohjassa.
    if (prosentitmaara > 0) {
        prosentitmaara--;
        prosentithtml.innerHTML = prosentitmaara;
    }
}

const plusPohjassa = () => {
    // Tämä tapahtuu, jos plusnappia painetaan pohjassa.
    if (prosentitmaara < 200) {
        prosentitmaara++;
        prosentithtml.innerHTML = prosentitmaara;
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
    alert('Jokaisessa kysymyksessä sinulta kysytään prosenttimäärää. Säädä prosenttimäärää 0-200 välillä painamalla plus- ja miinusnappeja pohjassa. Kun olet säätänyt prosenttimäärän mielestäsi oikeaksi vastaukseksi, paina "Vastaa." Aikaa on 45 sekuntia kysymystä kohden.')
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

plusbutton.addEventListener('click', () => {
    //Tämä funktio lisää prosenttimäärään yhden numeron plusnappia kerran painettaessa.
    if (prosentitmaara < 200) {
        prosentitmaara = prosentitmaara + 1
        document.querySelector('#prosentitmaara').innerHTML = prosentitmaara
    }
})

minusbutton.addEventListener('mousedown', () => {
    //Kun nappia painetaan pohjassa, prosenttimäärää lasketaan yhdellä 100 millisekunnin välein.
    holdTimer = setInterval(minusPohjassa, 100)
})

minusbutton.addEventListener('mouseup', () => {
    clearInterval(holdTimer)
    //Kun napista päästetään irti, ajastin, joka mittaa napin painalluksen pituutta, resetoidaan.
})

plusbutton.addEventListener('mousedown', () => {
    //Kun nappia painetaan pohjassa, prosenttimäärää nostetaan yhdellä 100 millisekunnin välein.
    holdTimer = setInterval(plusPohjassa, 100)
})

plusbutton.addEventListener('mouseup', () => {
    clearInterval(holdTimer)
    //Kun napista päästetään irti, ajastin, joka mittaa napin painalluksen pituutta, resetoidaan.
})

minusbutton.addEventListener('mouseleave', () => {
    clearInterval(holdTimer)
    //Nappi ei jää pohjaan, jos hiiri poistuu napin päältä kesken painalluksen.
})

plusbutton.addEventListener('mouseleave', () => {
    clearInterval(holdTimer)
    //Nappi ei jää pohjaan, jos hiiri poistuu napin päältä kesken painalluksen.
})