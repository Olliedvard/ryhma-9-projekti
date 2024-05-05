let pisteet = 0
let aika = 0
let oikeaVastaus;
let action;
let peli = false; //Tämän avulla peli ei ala heti kun sivu käynnistyy vaan se pitäää aloittaa manuaalisesti

function stopCountdown() { //Funktio resetoi ajastimen
    clearInterval(action);
}

function hide(Id) {  //Luodaan functiot hide(Id) sekä show(Id) joiden avulla voidaan piilottaa ja näyttää haluttuja asioita sivulla. Esimerkiksi sen avulla piilotetaan ajastin kun sitä ei tarvita
    document.getElementById(Id).style.display = "none";
}


function show(Id) {
    document.getElementById(Id).style.display = "block";
}


document.getElementById("aloitanappi").onclick = function () { //Kun painetaan "Aloita peli" nappia koodi tarkistaa onko peli jo käynnissä, jos on sivu ladataan uudelleen. Muuten peli alkaa normaalisti ja pisteet nollataan 
    if (peli == true) {
        location.reload();
    }
    else {
        peli = true;
        pisteet = 0;

        document.getElementById("pisteet").innerHTML = pisteet;
        show("aikaboxi"); //Näyttää ajan kun peli alkaa, muuten aika on piilotettu. Asettaa ajaksi 30 sekuntia.
        aika = 30;

        document.getElementById("aika").innerHTML = aika;
        hide("peliloppu");
        
        document.getElementById("aloitanappi").innerHTML = "Aloita uudestaan";

        startCountdown();
        muodostaKysymys();

    }
}

for (i = 1; i < 5; i++) { //Silmukka käy läpi neljää boxia
    document.getElementById("box" + i).onclick = function () { //Kun peli on päällä ja klikkaa oikeasta boxista niin pisteet lisääntyy yhdellä. Kun vastaus on oikein, ylös tulee "oikein" laatikko. Muuten näyttää väärää vastausta ja saat yrittää uudestaan
        if (peli == true) {
            if (this.innerHTML == oikeaVastaus) {
                pisteet++;
                document.getElementById("pisteet").innerHTML = pisteet;
                hide("vaaravastaus");
                show("oikein");
                setTimeout(function () {
                    hide("oikein");
                }, 1000);
                muodostaKysymys();

            } else {
                hide("oikein");
                show("vaaravastaus");
                setTimeout(function () {
                    hide("vaaravastaus");
                }, 1000);
            }
        }
    }
}

function muodostaKysymys() { //Muodostetaan funktio, jossa x ja y saavat jonkun arvoista 1-9 ja muodostaa niistä kertolaskun. Oikea vastaus tallennetaan oikeaVastaus muuttujaan.
    let x = 1 + Math.round(9 * Math.random());
    let y = 1 + Math.round(9 * Math.random());
    oikeaVastaus = x * y;

    document.getElementById("kysymys").innerHTML = x + "x" + y;
    let correctPosition = 1 + Math.round(3 * Math.random()); 
    //Oikean vastauksen paikka arvotaan 1 ja 3 välillä ja tallennetaan correctPosition muuttujaan.
    document.getElementById("box" + correctPosition).innerHTML = oikeaVastaus;

    let vastaukset = [oikeaVastaus];

    for (i = 1; i < 5; i++) { //Tehdään silmukka missä luodaan väärät vastaukset.
        if (i != correctPosition) {
            let wrongAnswer;
            do {
                wrongAnswer = (1 +
                    Math.round(9 * Math.random())) * (1 +
                        Math.round(9 * Math.random()));

            } while (vastaukset.indexOf(wrongAnswer) > -1)

            document.getElementById("box" + i).innerHTML = wrongAnswer;
            vastaukset.push(wrongAnswer);
        }
    }
}

function startCountdown() {  //Muodostetaan funktio ajastimelle eli ajastimesta poistuu yksi sekunti sekunnin välein kun peli aloitetaan. Lopuksi näytetään pisteet ja tallennetaan paras suoritus. Samalla pelin voi aloittaa uudestaan
    action = setInterval(function () {
        aika -= 1;


        document.getElementById("aika").innerHTML = aika; 
        if (aika == 0) { //Kun aika menee 0, peli päättyy ja sinulle näytetään pisteet. Jos ne oli parhaat pisteesi, pisteet tallennetaan sessionStorageen
            stopCountdown();
            show("peliloppu");
          
            document.getElementById("peliloppu").innerHTML = "<p>Aika loppui!</p><p>Sait " + pisteet + " pistettä!</p>";
            hide("aikaboxi");
            hide("oikein");
            hide("vaaravastaus");
            peli = false;

            if (pisteet > parhaatpisteet) {
                parhaatpisteet = pisteet
                sessionStorage.setItem("parhaatkertolaskupisteet", parhaatpisteet.toString())
                document.querySelector('#parhaatpisteet').innerHTML = parhaatpisteet
            }

            document.getElementById("aloitanappi").innerHTML = "Aloita peli";
        }
    }, 1000); // 1000 = 1000 millisekuntia = 1 sekunti
}

addEventListener("DOMContentLoaded", () => { //Tallennetaan parhaat pisteet sessionStorageen, jotta ne voidaan siirtä tulokset sivulle.
    parhaatpisteet = Number(sessionStorage.getItem("parhaatkertolaskupisteet"))
    document.querySelector('#parhaatpisteet').innerHTML = parhaatpisteet
    if (parhaatkertolaskupisteet = null) {
        parhaatkertolaskupisteet = 0
    } else {
        document.querySelector('#parhaatpisteet').innerHTML = parhaatpisteet
    }
})

console.log(pisteet)
console.log(parhaatpisteet)

//Tähän lisään videoita, joita olen hyödyntänyt projektissani
//https://www.youtube.com/watch?v=-oQnDrNzTTA
//https://www.youtube.com/watch?v=SBmSRK3feww
//https://www.youtube.com/watch?v=JRevaOwNKTI¨
//https://www.youtube.com/watch?v=DULFs16I_z8
//https://www.youtube.com/watch?v=UZqSpuUJPa0
//https://www.youtube.com/watch?v=xR82Jx4pqIc
//https://www.youtube.com/watch?v=aEj0Wu33hJM