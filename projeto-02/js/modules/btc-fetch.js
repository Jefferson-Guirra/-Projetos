export default function initFetchBtc(url, target) {
  fetch(url)
    .then(r => r.json())
    .then(btc => {
      const btcPreco = document.querySelector(target)
      btcPreco.innerHTML = (1000 / btc.BRL.sell).toFixed(4)
    })
    .catch(erro => {
      console.log(Error(erro))
    })
}
