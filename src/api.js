const requestOptions = {
  method: "GET",
  mode: "cors"
};

export const getCurrency = () =>
  fetch(
    "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR",
    requestOptions
  ).then(response => response.json());

export const getDailyBTC = () =>
  fetch(
    "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=23",
    requestOptions
  ).then(response => response.json());

export const getDailyETH = () =>
  fetch(
    "https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=23",
    requestOptions
  ).then(response => response.json());
