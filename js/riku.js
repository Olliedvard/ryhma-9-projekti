let rand_num1 = 0
let pisteet = 0
let kysymysnro = 0
let satunnainen = 0
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

const peliOhi = () => {
    alert("Onneksi olkoon!. Sait "+[pisteet]+"pistettä.")
    nappi.remove()
    clearInterval(ajastinON);
    if (pisteet > paras) {
        paras = pisteet
        sessionStorage.setItem("parhaatprosenttipisteet", paras.toString())
        document.querySelector('#ennätys').innerHTML = paras
    }
}

addEventListener("DOMContentLoaded", () =>{
    randomizeNumbers()
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
          }
          else { //Käyttäjä vastaa väärin
            alert('Väärin!');
          }
        }
        else { //Käyttäjän vastaus on tyhjä
          virhev.classList.remove("hide");
          virhev.innerHTML = "Laita vastaus vastauskenttään!";
        }
      });

    randomizeNumbers()
    document.querySelector('input').value=''