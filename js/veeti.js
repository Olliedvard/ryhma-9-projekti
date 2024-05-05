let pisteet;
let aika;
let oikeaVastaus;
let action;
let peli = false;

addEventListener("DOMContentLoaded", () => {
    parhaatpisteet = Number(sessionStorage.getItem("parhaatkertolaskupisteet"))
    document.querySelector('#parhaatpisteet').innerHTML = parhaatpisteet
    if (parhaatkertolaskupisteet = null) {
        parhaatkertolaskupisteet = 0
    } else {
        document.querySelector('#parhaatpisteet').innerHTML = parhaatpisteet
    }
})


document.getElementById("aloitanappi").onclick = function () {
    if (peli == true) {
        location.reload();
    }
    else {
        peli = true;
        pisteet = 0;

        document.getElementById("pisteet").innerHTML = pisteet;
        show("aikaboxi");
        aika = 30;

        document.getElementById("aika").innerHTML = aika;
        hide("peliloppu");
        
        document.getElementById("aloitanappi").innerHTML = "Aloita uudestaan";

        startCountdown();
        muodostaKysymys();

    }
}

for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function () {
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

function muodostaKysymys() {
    let x = 1 + Math.round(9 * Math.random());
    let y = 1 + Math.round(9 * Math.random());
    oikeaVastaus = x * y;

    document.getElementById("kysymys").innerHTML = x + "x" + y;
    let correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById("box" + correctPosition).innerHTML = oikeaVastaus;

    let vastaukset = [oikeaVastaus];

    for (i = 1; i < 5; i++) {
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

function startCountdown() {
    action = setInterval(function () {
        aika -= 1;


        document.getElementById("aika").innerHTML = aika;
        if (aika == 0) {
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
    }, 1000);
}

console.log(pisteet)
console.log(parhaatpisteet)


function stopCountdown() {
    clearInterval(action);
}

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}


function show(Id) {
    document.getElementById(Id).style.display = "block";
}

