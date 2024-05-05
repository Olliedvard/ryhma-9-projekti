let rand_num1 = 0
let pisteet = 0
let kysymysnro = 0
const nappi = document.getElementById('laske')
const virhev = document.getElementById('virheviesti')

//Tekee constin, joka on numero min ja maxin välillä, jotka voi määrittää
const randomNumberInRange = (min,max) =>{
    return Math.floor(Math.random() * max) + min;
}

//Luo satunnaisen numeron 1-12 ja kertoo sen itsellään
const randomizeNumbers = () =>{
    rand_num1 = randomNumberInRange(1,12)**2
    document.querySelector('#num1').innerHTML = rand_num1
}

//Pysäyttää pelin ja ilmoittaa pistemäärän
const pysäytä = () => {
    alert("Onneksi olkoon!. Sait "+[pisteet]+ " pistettä.")
    nappi.remove()
    if (pisteet > paras) {
        paras = pisteet
        sessionStorage.setItem("parhaatneliöjuuripisteet", paras.toString())
        document.querySelector('#ennätys').innerHTML = paras
    }
}

//Uudellleen randomisoi numeron vastauksen jälkeen ja lopettaa viidennen kysymyksen jälkeen
const seuraavaKysymys = () => {
    kysymysnro = kysymysnro+1
    if (kysymysnro < 5) {
        randomizeNumbers();

    } else {
        pysäytä()
    }
}

addEventListener("DOMContentLoaded", () =>{
    randomizeNumbers()
    if (paras = null) {
        paras = 0
    } else {
        document.querySelector('#ennätys').innerHTML = paras
    }
});

    //Koodi napille ja vastaamiselle
    nappi.addEventListener("click", () => {
        virhev.classList.add("hide");
        let userInput = Number(document.getElementById("vastaus").value);
        let answerValue = Math.sqrt(rand_num1) //Vastaus on satunnainen numero neliöjuuressa
        if (userInput) {
          if (userInput == answerValue) { //Käyttäjä vastaa oikein ja saa pisteitä
            alert('Oikein!');
            pisteet = pisteet + 10
          }
          else { //Käyttäjä vastaa väärin
            alert('Väärin!');
          }
          seuraavaKysymys();
        }
        else { //Käyttäjän vastaus on tyhjä
          virhev.classList.remove("hide"); //Näyttää virhe viestin
          virhev.innerHTML = "Laita vastaus vastauskenttään!";
        }
      });

    randomizeNumbers()
    document.querySelector('vastaus').value=''