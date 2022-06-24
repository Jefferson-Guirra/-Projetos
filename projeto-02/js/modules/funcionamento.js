export default class Funcionamento {
  constructor(functionamento, activeClass) {
    this.funcionamento = document.querySelector(functionamento)
    this.activeClass = activeClass
  }

  dadosFuncionamento() {
    this.semana = this.funcionamento.dataset.semana.split(',').map(Number)
    this.horario = this.funcionamento.dataset.horario.split(',').map(Number)
  }

  DadosAgora() {
    this.dataAgora = new Date()
    this.diaAgora = this.dataAgora.getDay()
    this.horarioAgora = this.dataAgora.getHours()
  }

  estaAberto() {
    const semanAberto = this.semana.indexOf(this.diaAgora) !== -1
    const horarioAberto =
      this.horarioAgora >= this.horario[0] &&
      this.horarioAgora < this.horario[1]
    return semanAberto && horarioAberto
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add('aberto')
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento()
      this.DadosAgora()
      this.ativaAberto()
    }
    return this
  }
}
