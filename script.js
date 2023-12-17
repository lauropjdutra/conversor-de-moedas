// Elementos do DOM
const amount = document.querySelector(".amount-input"); // Campo de valor
const button = document.querySelector(".convert-button"); // Botão de conversão
const currency1 = document.querySelector(".convert-from-select"); // Seleção da 1ª moeda
const currency2 = document.querySelector(".convert-to-select"); // Seleção da 2ª moeda
const name1 = document.querySelector(".currency-from"); // Nome da moeda a ser convertida
const name2 = document.querySelector(".currency-to"); // Nome da moeda convertida
const icon1 = document.querySelector(".icon-from"); // Ícone da moeda a ser convertida
const icon2 = document.querySelector(".icon-to"); // Ícone da moeda convertida
const value1 = document.querySelector(".value-from"); // Valor a ser convertido
const value2 = document.querySelector(".value-to"); // Valor convertido
const arrow = document.querySelector(".arrow-img");

// INÍCIO DA FUNÇÃO CONVERT
async function convert() {
  // API de cotação em tempo real
  const coins =
    "USD-BRL,EUR-BRL,GBP-BRL,CHF-BRL,JPY-BRL,ARS-BRL,BTC-BRL,ETH-BRL,LTC-BRL,XRP-BRL,DOGE-BRL";
  const url = `https://economia.awesomeapi.com.br/last/${coins}`;
  const response = await fetch(url);
  const data = await response.json();

  // Moedas
  const BRL = 1;
  const USD = data.USDBRL["bid"];
  const EUR = data.EURBRL["bid"];
  const GBP = data.GBPBRL["bid"];
  const CHF = data.CHFBRL["bid"];
  const JPY = data.JPYBRL["bid"];
  const ARS = data.ARSBRL["bid"];
  const BTC = data.BTCBRL["bid"];
  const ETH = data.ETHBRL["bid"];
  const LTC = data.LTCBRL["bid"];
  const XRP = data.XRPBRL["bid"];
  const XDG = data.DOGEBRL["bid"];

  // Identificação da 1ª moeda
  let coin1 = 0;
  switch (currency1.value) {
    case "dollar":
      coin1 = USD;
      break;
    case "real":
      coin1 = BRL;
      break;
    case "euro":
      coin1 = EUR;
      break;
    case "pound":
      coin1 = GBP;
      break;
    case "franc":
      coin1 = CHF;
      break;
    case "yen":
      coin1 = JPY;
      break;
    case "peso":
      coin1 = ARS;
      break;
    case "bitcoin":
      coin1 = BTC;
      break;
    case "ethereum":
      coin1 = ETH;
      break;
    case "litecoin":
      coin1 = LTC;
      break;
    case "xrp":
      coin1 = XRP;
      break;
    case "dogecoin":
      coin1 = XDG;
      break;
  }

  // Identificação da 2ª moeda
  let coin2 = 0;
  switch (currency2.value) {
    case "dollar":
      coin2 = USD;
      break;
    case "real":
      coin2 = BRL;
      break;
    case "euro":
      coin2 = EUR;
      break;
    case "pound":
      coin2 = GBP;
      break;
    case "franc":
      coin2 = CHF;
      break;
    case "yen":
      coin2 = JPY;
      break;
    case "peso":
      coin2 = ARS;
      break;
    case "bitcoin":
      coin2 = BTC;
      break;
    case "ethereum":
      coin2 = ETH;
      break;
    case "litecoin":
      coin2 = LTC;
      break;
    case "xrp":
      coin2 = XRP;
      break;
    case "dogecoin":
      coin2 = XDG;
      break;
  }

  // Cálculo
  const result = (amount.value * coin1) / coin2;

  // Formatação dos valores
  const formatUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formatBRL = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const formatEUR = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });
  const formatGBP = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  });
  const formatCHF = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "CHF",
  });
  const formatJPY = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "JPY",
  });
  const formatARS = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ARS",
  });
  const formatBTC = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BTC",
  });
  const formatETH = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "ETH",
  });
  const formatLTC = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "LTC",
  });
  const formatXRP = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "XRP",
  });
  const formatXDG = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "XDG",
  });

  // Formatação dos nomes
  const nameUSD = "Dólar americano";
  const nameBRL = "Real brasileiro";
  const nameEUR = "Euro";
  const nameGBP = "Libra esterlina";
  const nameCHF = "Franco suiço";
  const nameJPY = "Iene japonês";
  const nameARS = "Peso argentino";
  const nameBTC = "Bitcoin";
  const nameETH = "Ethereum";
  const nameLTC = "Litecoin";
  const nameXRP = "Ripple";
  const nameXDG = "Dogecoin";

  // Alteração da 1ª moeda
  icon1.src = `./assets/${currency1.value}.png`;
  switch (currency1.value) {
    case "dollar":
      name1.innerHTML = nameUSD;
      value1.innerHTML = formatUSD.format(amount.value);
      break;
    case "real":
      name1.innerHTML = nameBRL;
      value1.innerHTML = formatBRL.format(amount.value);
      break;
    case "euro":
      name1.innerHTML = nameEUR;
      value1.innerHTML = formatEUR.format(amount.value);
      break;
    case "pound":
      name1.innerHTML = nameGBP;
      value1.innerHTML = formatGBP.format(amount.value);
      break;
    case "franc":
      name1.innerHTML = nameCHF;
      value1.innerHTML = formatCHF.format(amount.value);
      break;
    case "yen":
      name1.innerHTML = nameJPY;
      value1.innerHTML = formatJPY.format(amount.value);
      break;
    case "peso":
      name1.innerHTML = nameARS;
      value1.innerHTML = formatARS.format(amount.value);
      break;
    case "bitcoin":
      name1.innerHTML = nameBTC;
      value1.innerHTML = formatBTC.format(amount.value);
      break;
    case "ethereum":
      name1.innerHTML = nameETH;
      value1.innerHTML = formatETH.format(amount.value);
      break;
    case "litecoin":
      name1.innerHTML = nameLTC;
      value1.innerHTML = formatLTC.format(amount.value);
      break;
    case "xrp":
      name1.innerHTML = nameXRP;
      value1.innerHTML = formatXRP.format(amount.value);
      break;
    case "dogecoin":
      name1.innerHTML = nameXDG;
      value1.innerHTML = formatXDG.format(amount.value);
      break;
  }

  // Alteração da 2ª moeda
  icon2.src = `./assets/${currency2.value}.png`;
  switch (currency2.value) {
    case "dollar":
      name2.innerHTML = nameUSD;
      value2.innerHTML = formatUSD.format(result);
      break;
    case "real":
      name2.innerHTML = nameBRL;
      value2.innerHTML = formatBRL.format(result);
      break;
    case "euro":
      name2.innerHTML = nameEUR;
      value2.innerHTML = formatEUR.format(result);
      break;
    case "pound":
      name2.innerHTML = nameGBP;
      value2.innerHTML = formatGBP.format(result);
      break;
    case "franc":
      name2.innerHTML = nameCHF;
      value2.innerHTML = formatCHF.format(result);
      break;
    case "yen":
      name2.innerHTML = nameJPY;
      value2.innerHTML = formatJPY.format(result);
      break;
    case "peso":
      name2.innerHTML = nameARS;
      value2.innerHTML = formatARS.format(result);
      break;
    case "bitcoin":
      name2.innerHTML = nameBTC;
      value2.innerHTML = formatBTC.format(result);
      break;
    case "ethereum":
      name2.innerHTML = nameETH;
      value2.innerHTML = formatETH.format(result);
      break;
    case "litecoin":
      name2.innerHTML = nameLTC;
      value2.innerHTML = formatLTC.format(result);
      break;
    case "xrp":
      name2.innerHTML = nameXRP;
      value2.innerHTML = formatXRP.format(result);
      break;
    case "dogecoin":
      name2.innerHTML = nameXDG;
      value2.innerHTML = formatXDG.format(result);
      break;
  }
}
// FIM DA FUNÇÃO CONVERT

function invert() {
  let aux = currency1.value;
  currency1.value = currency2.value;
  currency2.value = aux;
  convert();
}

arrow.addEventListener("click", invert);
currency1.addEventListener("change", convert);
currency2.addEventListener("change", convert);
button.addEventListener("click", convert);
amount.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});