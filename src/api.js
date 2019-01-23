const requestOptions = {
  method: 'GET',
  mode: 'cors'
};

export const getCurrency = () => 
  fetch('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR', requestOptions)
    .then(response => response.json());
  