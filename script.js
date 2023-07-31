const convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
function convertValues() {

    const inputCurrencyValues = document.querySelector(".input-currency").value
    const currencyValueToConverted = document.querySelector(".currencyValueToConverted")
    const currencyValueConverted = document.querySelector(".currencyValueConverted")


    const dolarToday = 4.7
    const euroToday = 5.2
    const libraToday = 6.1

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", { //a linguagem que é 
            style: "currency", //é o estilo que é o estilo de moeda 
            currency: "usd" // que tipo de moeda que é 
        }).format(inputCurrencyValues / dolarToday)
    }


    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", { //a linguagem que é 
            style: "currency", //é o estilo que é o estilo de moeda 
            currency: "EUR" // que tipo de moeda que é 
        }).format(inputCurrencyValues / euroToday)
    }

    
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", { //a linguagem que é 
            style: "currency", //é o estilo que é o estilo de moeda 
            currency: "GBP" // que tipo de moeda que é 
        }).format(inputCurrencyValues / libraToday)
    }

    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-br", { //a linguagem que é 
        style: "currency", //é o estilo que é o estilo de moeda 
        currency: "BRL" // que tipo de moeda que é 
    }).format(inputCurrencyValues)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }


    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra 1.png"
    }

    convertValues()
}
currencySelect.addEventListener("change", changeCurrency)
convertbutton.addEventListener("click", convertValues)