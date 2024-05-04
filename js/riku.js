let rand_num1 = 0
let pisteet = 0
let kysymysnro = 0
const nappi = document.getElementById('laske')
const virhev = document.getElementById('virheviesti')

//Satunnaisen numeron luonti koodi
const getRandomIntNumberInRange = (min,max) =>{
    return Math.floor(Math.random() * max) + min;
}

//Luo satunnaisen numeron 1-12 ja kertoo sen itsellään
const randomizeNumbers = () =>{
    rand_num1 = getRandomIntNumberInRange(1,12)**2
    document.querySelector('#num1').innerHTML = rand_num1
}

const pysäytä = () => {
    alert("Onneksi olkoon!. Sait "+[pisteet]+ "pistettä.")
    nappi.remove()
    if (pisteet > paras) {
        paras = pisteet
        sessionStorage.setItem("parhaatneliöjuuripisteet", paras.toString())
        document.querySelector('#ennätys').innerHTML = paras
    }
}

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

    //User Input Check
    nappi.addEventListener("click", () => {
        virhev.classList.add("hide");
        let userInput = Number(document.getElementById("vastaus").value);
        let answerValue = Math.sqrt(rand_num1)
        //If user input is not empty
        if (userInput) {
          if (userInput == answerValue) { //Käyttäjä vastaa oikein
            alert('Oikein!');
            pisteet = pisteet + 10
          }
          else { //Käyttäjä vastaa väärin
            alert('Väärin!');
          }
        }
        else { //Käyttäjän vastaus on tyhjä
          virhev.classList.remove("hide");
          virhev.innerHTML = "Laita vastaus vastauskenttään!";
        }
        seuraavaKysymys();
      });

    randomizeNumbers()
    document.querySelector('input').value=''