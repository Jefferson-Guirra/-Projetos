import debounce from './debounce.js'

class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide)
    this.wrapper = document.querySelector(wrapper)
    this.dist = { finalPosition: 0, startX: 0, movement: 0 }
    this.activeClass = 'active'
    this.changeEvent = new Event('changeEvent')
  }

  transition(active) {
    this.slide.style.transition = active ? 'transform .3s' : ''
  }

  moveSlide(distX) {
    this.dist.movePosition = distX
    this.slide.style.transform = `translate3d(${distX}px,0,0)`
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6
    return this.dist.finalPosition - this.dist.movement
  }

  onStart(event) {
    let moveType
    if (event.type === 'mousedown') {
      event.preventDefault()
      this.dist.startX = event.clientX
      moveType = 'mousemove'
    } else {
      this.dist.startX = event.changedTouches[0].clientX
      moveType = 'touchmove'
    }

    this.wrapper.addEventListener(moveType, this.onMove)
    this.transition(false)
  }

  addEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart)
    this.wrapper.addEventListener('touchstart', this.onStart)
    this.wrapper.addEventListener('mouseup', this.onEnd)
    this.wrapper.addEventListener('touchend', this.onEnd)
  }

  onMove(event) {
    const pointerPosition =
      event.type === 'mousemove'
        ? event.clientX
        : event.changedTouches[0].clientX
    const finalPositon = this.updatePosition(pointerPosition)
    this.moveSlide(finalPositon)
  }

  onEnd(event) {
    const moveType = event.type === 'mouseup' ? 'mousemove' : 'touchmove'
    this.wrapper.removeEventListener(moveType, this.onMove)
    this.dist.finalPosition = this.dist.movePosition
    this.changeSlideOnEnd()
    this.transition(true)
  }

  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      this.activeNextSlide()
    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
      this.activePrevSlide()
    } else {
      this.changeSlide(this.index.index)
    }
  }

  slidePosition(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2
    return -(slide.offsetLeft - margin)
  }

  // Slides Config
  slidesConfig() {
    this.slideArray = [...this.slide.children].map(element => {
      const position = this.slidePosition(element)
      return { element, position }
    })
  }

  slideIndexNav(index) {
    const last = this.slideArray.length - 1
    return (this.index = {
      prev: index ? index - 1 : undefined,
      index,
      next: index === last ? undefined : index + 1
    })
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index]
    this.moveSlide(activeSlide.position)
    this.slideIndexNav(index)
    this.dist.finalPosition = activeSlide.position
    this.changeActiveClass()
    this.wrapper.dispatchEvent(this.changeEvent)
  }

  changeActiveClass() {
    this.slideArray.forEach(item =>
      item.element.classList.remove(this.activeClass)
    )
    this.slideArray[this.index.index].element.classList.add(this.activeClass)
  }

  activePrevSlide() {
    if (this.index.prev !== undefined) this.changeSlide(this.index.prev)
  }

  activeNextSlide() {
    if (this.index.next !== undefined) this.changeSlide(this.index.next)
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig()
      this.changeSlide(this.index.index)
    }, 1000)
  }

  addReziseEvent() {
     window.addEventListener('resize', this.onResize)
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this)
    this.onMove = this.onMove.bind(this)
    this.onEnd = this.onEnd.bind(this)
    this.onResize = debounce(this.onResize.bind(this), 200)
    this.activeNextSlide = this.activeNextSlide.bind(this)
    this.activePrevSlide = this.activePrevSlide.bind(this)
  }

  init() {
    this.bindEvents()
    this.addEvents()
    this.slidesConfig()
    this.addReziseEvent()
    this.changeSlide(2)
    return this
  }
}

export default class SlideNav extends Slide {
  constructor(slide, wrapper) {
    super(slide, wrapper)
    this.bindControlEvents()
  }

  addArrow(next, prev) {
    this.next = document.querySelector(next)
    this.prev = document.querySelector(prev)
    this.addArrowEvent()
  }

  addArrowEvent() {
    this.prev.addEventListener('click', this.activePrevSlide)
    this.next.addEventListener('click', this.activeNextSlide)
  }

  createControl() {
    const control = document.createElement('ul')
    control.dataset.control = 'slide'
    this.slideArray.forEach((item, index) => {
      control.innerHTML += `<li><a href="#slide${index}">${index}</a></li>`
    })
    this.wrapper.appendChild(control)
    return control
  }

  eventControl(item, index) {
    item.addEventListener('click', event => {
      event.preventDefault()
      this.changeSlide(index)
    })
    this.wrapper.addEventListener('changeEvent',this.activeControlItem)
  }

  activeControlItem(){
    this.controlArray.forEach(item=>item.classList.remove(this.activeClass))
    this.controlArray[this.index.index].classList.add(this.activeClass)
  }

  addControl(customControl) {
    this.control = document.querySelector(customControl) || this.createControl()
    this.controlArray = [...this.control.children]
    this.controlArray.forEach(this.eventControl)
    this.activeControlItem()
  }

  bindControlEvents() {
    this.eventControl = this.eventControl.bind(this)
    this.activeControlItem = this.activeControlItem.bind(this)
  }
}
