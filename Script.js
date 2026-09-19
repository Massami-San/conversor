const ConvertButton = document.querySelector(".convert-button");
const currencyValueToConvert = document.querySelector(".value-select-to-convert");
const moedaA = document.querySelector(".moeda-a-ser-convertida");
const currencyValueConverted = document.querySelector(".value-select-convert");
const moedaB = document.querySelector(".moeda-convertida");

const currencyConfig = {
    real: {
        label: "R$ Real Brasileiro",
        image: "./Assets/Brasil.png",
        locale: "pt-BR",
        currency: "BRL",
        rateToBRL: 1,
    },
    dolar: {
        label: "US$ Dólar Americano",
        image: "./Assets/USA.png",
        locale: "en-US",
        currency: "USD",
        rateToBRL: 5.2,
    },
    euro: {
        label: "€ Euro",
        image: "./Assets/Euro.png",
        locale: "de-DE",
        currency: "EUR",
        rateToBRL: 5.9,
    },
    libra: {
        label: "£ Libra Esterlina",
        image: "./Assets/Libra.png",
        locale: "en-GB",
        currency: "GBP",
        rateToBRL: 6.5,
    },
    iene: {
        label: "¥ Iene Japonês",
        image: "./Assets/Japao.png",
        locale: "ja-JP",
        currency: "JPY",
        rateToBRL: 0.038,
    },
    Peso: {
        label: "$ Peso Argentino",
        image: "./Assets/Peso.png",
        locale: "es-AR",
        currency: "ARS",
        rateToBRL: 0.027,
    },
    bitcoin: {
        label: "₿ Bitcoin",
        image: "./Assets/Bit.png",
        locale: "en-US",
        currency: "USD",
        rateToBRL: 125000,
    },
};

function formatCurrency(value, currencyKey) {
    const config = currencyConfig[currencyKey];

    if (!config) {
        return "R$ 0,00";
    }

    if (currencyKey === "bitcoin") {
        return `₿ ${Number(value).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 8,
        })}`;
    }

    return new Intl.NumberFormat(config.locale, {
        style: "currency",
        currency: config.currency,
    }).format(value);
}

function updateCurrencyLabels() {
    const fromCurrency = currencyValueToConvert.value;
    const toCurrency = currencyValueConverted.value;

    const coinToConvert = document.querySelector(".coin-to-convert");
    const coinConverted = document.querySelector(".coin-converted");

    coinToConvert.textContent = currencyConfig[fromCurrency].label;
    coinConverted.textContent = currencyConfig[toCurrency].label;

    moedaA.src = currencyConfig[fromCurrency].image;
    moedaB.src = currencyConfig[toCurrency].image;
}

function convertValues() {
    const input = Number(document.querySelector("input").value || 0);
    const fromCurrency = currencyValueToConvert.value;
    const toCurrency = currencyValueConverted.value;

    const valueInBRL = input * currencyConfig[fromCurrency].rateToBRL;
    const convertedValue = valueInBRL / currencyConfig[toCurrency].rateToBRL;

    const valueToConvert = document.querySelector(".value-to-converted");
    const curencyValue = document.querySelector(".value-converted");

    valueToConvert.textContent = formatCurrency(input, fromCurrency);
    curencyValue.textContent = formatCurrency(convertedValue, toCurrency);
}

ConvertButton.addEventListener("click", convertValues);
currencyValueToConvert.addEventListener("change", function () {
    updateCurrencyLabels();
    convertValues();
});
currencyValueConverted.addEventListener("change", function () {
    updateCurrencyLabels();
    convertValues();
});

updateCurrencyLabels();
convertValues();