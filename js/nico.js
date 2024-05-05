let kysymysnro = 0
let pisteet = 0
let prosentitmaara = 100
let aika = 60
let holdTimer; //Ajastin, joka mittaa, onko nappi painettu pohjaan.
let kysymys = ''
let vastaus = 0
let satunnainen = 0
const minusbutton = document.getElementById('minusbutton')
const plusbutton = document.getElementById('plusbutton')
const minus10button = document.getElementById('minus10button')
const plus10button = document.getElementById('plus10button')
const prosentithtml = document.getElementById('prosentitmaara')
const vastausnappi = document.getElementById('vastaa')
const ajastinON = setInterval(kysymysAjastin, 1000) //Ajastin on sekunneissa eli 1000 millisekuntia.

var kysymykset = ["Kuinka monta prosenttia 4 on 20:stä?",
"Montako prosenttia 60€ maksava tuote on alennuksessa, kun tuotteen alennettu hinta on 15€?",
"Paljonko desimaaliluku 1,6 on prosentteina?",
"Montako prosenttia 0,7 on 2,1:stä?",
"Montako prosenttia 84 on 200:sta?",
"Montako prosenttia on neljä viidesosaa?",
"Kuinka monta prosenttia 30 tuntia on yhdestä vuorokaudesta?",
"Jos vaaleissa annettiin yhteensä 500 ääntä, ja ehdokas A sai 200 ääntä, mikä oli ehdokas A:n saamien äänien prosenttiosuus kokonaisäänistä?",
"Jos tuotteen hintaa nostetaan 30€:sta 60€:n, kuinka monta prosenttia hintaa nostetaan?",
"Paljonko luku 0,3 on prosentteina?",
"Montako prosenttia 1,72 on 1,0:sta?",
"Jos tuotteen hintaa nostetaan 3€:sta 9€:n, kuinka monta prosenttia hintaa nostetaan?"
]

var vastaukset = ["20", "75", "160", "33", "42", "80", "125", "40", "100", "30", "172", "200"] //Vastaukset on annettu siinä järjestyksessä, missä niitä vastaavat kysymyksetkin.

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

const uusiKysymys = () => {
    kysymysnro = kysymysnro+1
    if (kysymysnro < 6) {
        let satunnainen = Math.floor(Math.random() * kysymykset.length) ; //Arvotaan jokin numero, joka määrittää kysymyksen ja sen vastauksen.
        vastaus = vastaukset[satunnainen]
        let kysymys = kysymykset[satunnainen]
        aika = 60
        prosentitmaara = 100
        document.querySelector('#prosentitmaara').innerHTML = prosentitmaara
        document.querySelector('#kysymysnro').innerHTML = kysymysnro
        document.querySelector('#kysymys').innerHTML = kysymys
        kysymykset.splice(satunnainen, 1) //Poistetaan arvottu kysymys kysymyksistä.
        vastaukset.splice(satunnainen, 1) //Poistetaan arvottu vastaus.
    } else {
        peliOhi()
    }
}

const peliOhi = () => {
    alert("Peli on päättynyt. Lopullinen pistemääräsi on "+[pisteet]+". Päivitä sivu pelataksesi uudestaan.")
    vastausnappi.remove()
    aika = 0
    clearInterval(ajastinON);
    if (pisteet > parhaatpisteet) {
        parhaatpisteet = pisteet
        sessionStorage.setItem("parhaatprosenttipisteet", parhaatpisteet.toString())
        document.querySelector('#parhaatpisteet').innerHTML = parhaatpisteet
        alert("Teit juuri uuden ennätyksesi! Uusi paras pistemääräsi on "+parhaatpisteet)
    }
}

vastausnappi.addEventListener('click', () => { //Mitä tapahtuu, kun käyttäjä painaa "vastaa" -nappia.
    const kayttajanVastaus = document.querySelector('#prosentitmaara').innerHTML // Käyttäjän antama vastaus
    const oikeaVastaus = vastaus

    if (kayttajanVastaus === oikeaVastaus) { //Jos käyttäjän vastaus on täysin oikein, hän saa 5 kertaa sekuntien verran pisteitä.
        uudetPisteet = 5 * aika; // Lisätään pisteitä.
        alert("Oikein! Vastaus on " + oikeaVastaus + ". Tästä vastauksesta saat " + uudetPisteet + " pistettä.");
        pisteet = pisteet + uudetPisteet; // Lisätään uudet pisteet käyttäjän kokonaispistemäärään.
        document.querySelector('#pisteet').innerHTML = pisteet; // Päivitetään pistemäärä näyttämään muuttunut arvo.
    } else if (kayttajanVastaus - oikeaVastaus === -1 || kayttajanVastaus + oikeaVastaus === 1) { //Jos käyttäjän antama vastaus heittää yhdellä, hän saa pisteitä kolme kertaa sekuntien verran.
        uudetPisteet = 3 * aika;
        alert("Olit todella lähellä! Oikea vastaus olisi ollut " + oikeaVastaus + ". Olit kuitenkin niin lähellä, että saat " + uudetPisteet + " pistettä.")
        pisteet = pisteet + uudetPisteet;
        document.querySelector('#pisteet').innerHTML = pisteet; // Päivitetään pistemäärä näyttämään muuttunut arvo.
    } else if (kayttajanVastaus - oikeaVastaus < 6 && oikeaVastaus - kayttajanVastaus < 6) {
        uudetPisteet = aika;
        alert("Ei aivan... Oikea vastaus olisi ollut " + oikeaVastaus + ". Olit kuitenkin niin lähellä, että saat " + uudetPisteet + " pistettä.");
        pisteet = pisteet + uudetPisteet
        document.querySelector('#pisteet').innerHTML = pisteet
    } else {
        alert("Väärä vastaus! Oikea vastaus olisi ollut " + oikeaVastaus + ". Tästä saat 0 pistettä."); // Näytetään ilmoitus väärästä vastauksesta.
    }
    uusiKysymys();
});

function kysymysAjastin() {
    //Ajastimesta poistuu yksi sekunti sekunnin välein. (Sekunti määrätty ajastinONissa.) Kun ajastimessa on 0 sekuntia, aika päättyy.
    aika--;
    document.querySelector('#aika').innerHTML = aika;

    if (aika === 0) {
        alert('Aika loppui.');
        uusiKysymys()
    }
}

addEventListener("DOMContentLoaded", () => {
    alert('Jokaisessa kysymyksessä sinulta kysytään prosenttimäärää. Säädä prosenttimäärää 0-200 välillä painamalla plus- ja miinusnappeja pohjassa. Pyöristä prosentti oikeaa vastausta lähimpään kokonaislukuun. Kun olet säätänyt prosenttimäärän mielestäsi oikeaksi vastaukseksi, paina "Vastaa." Aikaa on 60 sekuntia kysymystä kohden. Mitä nopeampi olet, sitä enemmän saat pisteitä. Jos vastauksesi on melkein oikein, saat säälipisteitä.')
    document.querySelector('#prosentitmaara').innerHTML = prosentitmaara
    document.querySelector('#pisteet').innerHTML = pisteet
    document.querySelector('#kysymysnro').innerHTML = kysymysnro
    document.querySelector('#aika').innerHTML = aika
    parhaatpisteet = Number(sessionStorage.getItem("parhaatprosenttipisteet"))
    document.querySelector('#parhaatpisteet').innerHTML = parhaatpisteet
    if (parhaatprosenttipisteet = null) {
        parhaatprosenttipisteet = 0
    } else {
        document.querySelector('#parhaatpisteet').innerHTML = parhaatpisteet
    }
    uusiKysymys()
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