addEventListener("DOMContentLoaded", () => {
    parhaatnico = Number(sessionStorage.getItem("parhaatprosenttipisteet")) //Haetaan prosenttipelin js-koodissa määritelty muuttuja "parhaatprosenttipisteet"
    document.querySelector('#parhaatnico').innerHTML = parhaatnico //Näytetään "parhaatprosenttipisteet" prosenttipelin "parhaat pisteet" -sarakkeella.
    parhaatriku = Number(sessionStorage.getItem("parhaatneliöjuuripisteet"))
    document.querySelector('#parhaatriku').innerHTML = parhaatriku
    parhaathenrik = Number(sessionStorage.getItem("parhaatpolynomipisteet"))
    document.querySelector('#parhaathenrik').innerHTML = parhaathenrik
    parhaatveeti = Number(sessionStorage.getItem("parhaatkertolaskupisteet"))
    document.querySelector('#parhaatveeti').innerHTML = parhaatveeti
    parhaatolli = Number(sessionStorage.getItem("pisteetpotenssi"))
    document.querySelector('#parhaatolli').innerHTML = parhaatolli
})