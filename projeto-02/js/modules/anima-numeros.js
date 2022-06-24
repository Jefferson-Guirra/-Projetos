export default class AnimaNumero {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros)
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass

    //  bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this)
  }
  // recebe um elemento do dom, com numero em seu texto
  // incremente a partir do 0 ate o número final

  static incrementarNumero(numero) {
    const total = +numero.innerText
    const incremento = Math.floor(total / 100)

    let start = 0

    const timer = setInterval(() => {
      start += incremento
      numero.innerText = start
      if (start > total) {
        numero.innerText = total
        clearInterval(timer)
      }
    }, 25 * Math.random())
  }

  // Ativa incrementar numero para cada número selecionado
  AnimaNumero() {
    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero))
  }
  // Função que ocorre qunado a mutação ocorrer

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.AnimaNumero()
    }
  }
  // Adiciona o mutation observer
  // para verificar quando a class ativo é
  // adicionada ao elemento target

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observerTarget, { attributes: true })
  }

  init() {
    if (this.numeros.length && this.observerTarget && this.observerClass) {
      this.addMutationObserver()
    }
    return this
  }
}
