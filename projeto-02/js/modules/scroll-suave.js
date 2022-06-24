export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links)
    if(options===undefined){
      this.options = {behavior:'smooth',block:'start'}
    }else {
      this.options = options
    }
    this.scrolltoSection = this.scrolltoSection.bind(this)
  }

  scrolltoSection(event) {
    event.preventDefault()

    const linkHref = event.currentTarget.getAttribute('href')

    const section = document.querySelector(linkHref)
    section.scrollIntoView(this.options)
  }

  addLink() {
    this.linksInternos.forEach((link)=>{
      link.addEventListener('click',this.scrolltoSection)
    })
  }

  init(){

    if(this.linksInternos.length){
      this.addLink()
    }
    return this
  }
}
