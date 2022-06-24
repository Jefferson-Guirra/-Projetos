import ScrollSuave from './modules/scroll-suave.js'
import ScrollAnima from './modules/scroll-anima.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tab-nav.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltips.js'
import DropDownMenu from './modules/dropdown-menu.js'
import MenuMobile from './modules/menu-mobile.js'
import AnimaNumero from './modules/anima-numeros.js'
import Funcionamento from './modules/funcionamento.js'
import initFetchBtc from './modules/btc-fetch.js'
import SlideNav from './modules/slide.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]')
scrollSuave.init()

const accordion = new Accordion('[data-anime ="accordion"] dt')
accordion.init()

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
)
tabNav.init()

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
)
modal.init()

const toolTips = new Tooltip('[data-tooltip]')
toolTips.init()

const animaNumero = new AnimaNumero('[data-numero]', '.numeros', 'ativo')
animaNumero.init()

const animaScroll = new ScrollAnima('[data-anime ="scroll"]')
animaScroll.init()

const dropdownMenu = new DropDownMenu('[data-dropdown]')
dropdownMenu.init()

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]')
menuMobile.init()

const funcionamento = new Funcionamento('[data-semana]', 'aberto')
funcionamento.init()

initFetchBtc('https://blockchain.info/ticker', '.btc-preco')

const slide = new SlideNav('.slide', '.slide-wrapper')
slide.init()
slide.addControl('.custom-controls')
