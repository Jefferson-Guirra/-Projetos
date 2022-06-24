 export default class TabNav {
  constructor (menu,content){
    this.tabMenu =document.querySelectorAll(menu)
    this.tabcontent =document.querySelectorAll(content)
    this.activeClass = 'ativo'
  }

  // Ativa a tab de acordo com o index da mesma
  activeTab(index){
    this.tabcontent.forEach((section)=>{
      section.classList.remove('ativo')
    })
    const dataset = this.tabcontent[index].dataset.anime
    this.tabcontent[index].classList.add('ativo',dataset)
  }
  // Adiciona os eventos nas tabs

  addTabNavEvent(){
    this.tabMenu.forEach((item,index)=>{
      item.addEventListener('click',()=>this.activeTab(index))
    })

  }

  init(){
    if (this.tabMenu.length && this.tabcontent.length){

      // Ativar primeiro item
      this.activeTab(0)
      this.addTabNavEvent()
    }
    return this
  }


}