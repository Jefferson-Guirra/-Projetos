/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar Accordion = /*#__PURE__*/function () {\n  function Accordion(list) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Accordion);\n\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = 'ativo';\n  }\n  /*\r\n   *Adicionando Class .ativo aos dd e dt de .faq-lista\r\n   */\n\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Accordion, [{\n    key: \"toggleAccordion\",\n    value: function toggleAccordion(item) {\n      item.classList.toggle(this.activeClass);\n      item.nextElementSibling.classList.toggle(this.activeClass);\n    } // Adiciona os eventos ao acordion\n\n  }, {\n    key: \"addAccordionEvent\",\n    value: function addAccordionEvent() {\n      var _this = this;\n\n      this.accordionList.forEach(function (item) {\n        item.addEventListener('click', function () {\n          return _this.toggleAccordion(item);\n        });\n      });\n    } // iniciar função\n\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.accordionList.length) {\n        // ativar primeiro item\n        this.toggleAccordion(this.accordionList[0]);\n        this.addAccordionEvent();\n      }\n\n      return this;\n    }\n  }]);\n\n  return Accordion;\n}();\n\n\n\n//# sourceURL=webpack://projeto-03/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumero)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar AnimaNumero = /*#__PURE__*/function () {\n  function AnimaNumero(numeros, observerTarget, observerClass) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AnimaNumero);\n\n    this.numeros = document.querySelectorAll(numeros);\n    this.observerTarget = document.querySelector(observerTarget);\n    this.observerClass = observerClass; //  bind o this do objeto ao callback da mutação\n\n    this.handleMutation = this.handleMutation.bind(this);\n  } // recebe um elemento do dom, com numero em seu texto\n  // incremente a partir do 0 ate o número final\n\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AnimaNumero, [{\n    key: \"AnimaNumero\",\n    value: // Ativa incrementar numero para cada número selecionado\n    function AnimaNumero() {\n      var _this = this;\n\n      this.numeros.forEach(function (numero) {\n        return _this.constructor.incrementarNumero(numero);\n      });\n    } // Função que ocorre qunado a mutação ocorrer\n\n  }, {\n    key: \"handleMutation\",\n    value: function handleMutation(mutation) {\n      if (mutation[0].target.classList.contains(this.observerClass)) {\n        this.observer.disconnect();\n        this.AnimaNumero();\n      }\n    } // Adiciona o mutation observer\n    // para verificar quando a class ativo é\n    // adicionada ao elemento target\n\n  }, {\n    key: \"addMutationObserver\",\n    value: function addMutationObserver() {\n      this.observer = new MutationObserver(this.handleMutation);\n      this.observer.observe(this.observerTarget, {\n        attributes: true\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.numeros.length && this.observerTarget && this.observerClass) {\n        this.addMutationObserver();\n      }\n\n      return this;\n    }\n  }], [{\n    key: \"incrementarNumero\",\n    value: function incrementarNumero(numero) {\n      var total = +numero.innerText;\n      var incremento = Math.floor(total / 100);\n      var start = 0;\n      var timer = setInterval(function () {\n        start += incremento;\n        numero.innerText = start;\n\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    }\n  }]);\n\n  return AnimaNumero;\n}();\n\n\n\n//# sourceURL=webpack://projeto-03/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/btc-fetch.js":
/*!*********************************!*\
  !*** ./js/modules/btc-fetch.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBtc)\n/* harmony export */ });\nfunction initFetchBtc(url, target) {\n  fetch(url).then(function (r) {\n    return r.json();\n  }).then(function (btc) {\n    var btcPreco = document.querySelector(target);\n    btcPreco.innerHTML = (1000 / btc.BRL.sell).toFixed(4);\n  })[\"catch\"](function (erro) {\n    console.log(Error(erro));\n  });\n}\n\n//# sourceURL=webpack://projeto-03/./js/modules/btc-fetch.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  var timer;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    if (timer) {\n      clearTimeout(timer);\n    }\n\n    timer = setTimeout(function () {\n      callback.apply(void 0, args);\n      timer = null;\n    }, delay);\n  };\n}\n\n//# sourceURL=webpack://projeto-03/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\n\n\nvar DropDownMenu = /*#__PURE__*/function () {\n  function DropDownMenu(initmenu, events) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, DropDownMenu);\n\n    this.initMenu = document.querySelectorAll(initmenu); // define touchstart e click como argumento\n    // padrão de events caso o usuário não defina\n\n    if (events === undefined) this.events = ['touchstart', 'click'];else this.events = events;\n    this.activeClass = 'active';\n    this.ActiveDropDownMenu = this.ActiveDropDownMenu.bind(this);\n  } // Ativa o dropdownmenu e adiciona\n  // A função que observa o clique fora dele\n\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DropDownMenu, [{\n    key: \"ActiveDropDownMenu\",\n    value: function ActiveDropDownMenu(event) {\n      event.preventDefault();\n      var element = event.currentTarget;\n      element.classList.add(this.activeClass);\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(element, this.events, function () {\n        element.classList.remove('active');\n      });\n    } // Adiciona os eventos  ao dropdownmenu\n\n  }, {\n    key: \"addDropdownMenusEvent\",\n    value: function addDropdownMenusEvent() {\n      var _this = this;\n\n      this.initMenu.forEach(function (item) {\n        _this.events.forEach(function (userEvent) {\n          item.addEventListener(userEvent, _this.ActiveDropDownMenu);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.initMenu.length) {\n        this.addDropdownMenusEvent();\n      }\n\n      return this;\n    }\n  }]);\n\n  return DropDownMenu;\n}();\n\n\n\n//# sourceURL=webpack://projeto-03/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Funcionamento)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar Funcionamento = /*#__PURE__*/function () {\n  function Funcionamento(functionamento, activeClass) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Funcionamento);\n\n    this.funcionamento = document.querySelector(functionamento);\n    this.activeClass = activeClass;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Funcionamento, [{\n    key: \"dadosFuncionamento\",\n    value: function dadosFuncionamento() {\n      this.semana = this.funcionamento.dataset.semana.split(',').map(Number);\n      this.horario = this.funcionamento.dataset.horario.split(',').map(Number);\n    }\n  }, {\n    key: \"DadosAgora\",\n    value: function DadosAgora() {\n      this.dataAgora = new Date();\n      this.diaAgora = this.dataAgora.getDay();\n      this.horarioAgora = this.dataAgora.getHours();\n    }\n  }, {\n    key: \"estaAberto\",\n    value: function estaAberto() {\n      var semanAberto = this.semana.indexOf(this.diaAgora) !== -1;\n      var horarioAberto = this.horarioAgora >= this.horario[0] && this.horarioAgora < this.horario[1];\n      return semanAberto && horarioAberto;\n    }\n  }, {\n    key: \"ativaAberto\",\n    value: function ativaAberto() {\n      if (this.estaAberto()) {\n        this.funcionamento.classList.add('aberto');\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.funcionamento) {\n        this.dadosFuncionamento();\n        this.DadosAgora();\n        this.ativaAberto();\n      }\n\n      return this;\n    }\n  }]);\n\n  return Funcionamento;\n}();\n\n\n\n//# sourceURL=webpack://projeto-03/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\n\n\nvar initMenuMobile = /*#__PURE__*/function () {\n  function initMenuMobile(menubutton, menuList, events) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, initMenuMobile);\n\n    this.menubutton = document.querySelector(menubutton);\n    this.menuList = document.querySelector(menuList);\n    this.activeClass = 'active'; // Define touchstart e click como evento padrão\n    // caso o usuário não definir\n\n    if (events === undefined) this.events = ['click', 'touchstart'];else this.events = events;\n    this.initMenuMob = this.initMenuMob.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(initMenuMobile, [{\n    key: \"initMenuMob\",\n    value: function initMenuMob(event) {\n      var _this = this;\n\n      event.preventDefault();\n      this.menuList.classList.add(this.activeClass);\n      this.menubutton.classList.add(this.activeClass);\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this.menuList, this.events, function () {\n        _this.menuList.classList.remove(_this.activeClass);\n\n        _this.menubutton.classList.remove(_this.activeClass);\n      });\n    }\n  }, {\n    key: \"addMenuMobileEvents\",\n    value: function addMenuMobileEvents() {\n      var _this2 = this;\n\n      this.events.forEach(function (userEvents) {\n        _this2.menubutton.addEventListener(userEvents, _this2.initMenuMob);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.menubutton && this.menuList) this.addMenuMobileEvents();\n      return this;\n    }\n  }]);\n\n  return initMenuMobile;\n}();\n\n\n\n//# sourceURL=webpack://projeto-03/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(botaoAbrir, botaoFechar, containerModal) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Modal);\n\n    this.botaoabrir = document.querySelector(botaoAbrir);\n    this.botaoFechar = document.querySelector(botaoFechar);\n    this.containerModal = document.querySelector(containerModal); // bind this ao callback para\n    // fazer referência ao objeto\n    // da classe\n\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\n  } // abre ou fecha o modal\n\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Modal, [{\n    key: \"toggleModal\",\n    value: function toggleModal() {\n      this.containerModal.classList.toggle('ativo');\n    } // adiciona o evento de toggle ao modal\n\n  }, {\n    key: \"eventToggleModal\",\n    value: function eventToggleModal(event) {\n      event.preventDefault();\n      this.toggleModal();\n    } // fecha o modal ao clicar do lado de fora\n\n  }, {\n    key: \"cliqueForaModal\",\n    value: function cliqueForaModal(event) {\n      if (event.target === this.containerModal) {\n        this.toggleModal();\n      }\n    } // adicona eventos de clique aos elementos do modal\n\n  }, {\n    key: \"addModalEvents\",\n    value: function addModalEvents() {\n      this.botaoabrir.addEventListener('click', this.eventToggleModal);\n      this.botaoFechar.addEventListener('click', this.eventToggleModal);\n      this.containerModal.addEventListener('click', this.cliqueForaModal);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.botaoFechar && this.botaoabrir && this.containerModal) {\n        this.addModalEvents();\n      }\n\n      return this;\n    }\n  }]);\n\n  return Modal;\n}();\n\n\n\n//# sourceURL=webpack://projeto-03/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  var html = document.documentElement;\n  var outside = 'data-outside';\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside, '');\n      events.forEach(function (userEvents) {\n        html.removeEventListener(userEvents, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach(function (userEvents) {\n      setTimeout(function () {\n        html.addEventListener(userEvents, handleOutsideClick);\n      });\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n//# sourceURL=webpack://projeto-03/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-anima.js":
/*!************************************!*\
  !*** ./js/modules/scroll-anima.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\n\n\n\nvar ScrollAnima = /*#__PURE__*/function () {\n  function ScrollAnima(sections) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, ScrollAnima);\n\n    this.sections = document.querySelectorAll(sections);\n    this.windowMetade = window.innerHeight * 0.6;\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.checkDistance.bind(this), 50);\n  } // Pega a distancia de cada item em relaçao ao topo do site\n\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ScrollAnima, [{\n    key: \"getDistance\",\n    value: function getDistance() {\n      var _this = this;\n\n      this.distance = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.sections).map(function (section) {\n        var offset = section.offsetTop;\n        return {\n          element: section,\n          offset: Math.floor(offset - _this.windowMetade)\n        };\n      });\n    } // verifica a distancia de cada objeto\n    // em relação ao scroll do site\n\n  }, {\n    key: \"checkDistance\",\n    value: function checkDistance() {\n      this.distance.forEach(function (section) {\n        if (window.pageYOffset > section.offset) {\n          section.element.classList.add('ativo');\n        } else if (section.element.classList.contains('ativo')) {\n          section.element.classList.remove('ativo');\n        }\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.sections.length) {\n        this.getDistance();\n        this.checkDistance();\n        window.addEventListener('scroll', this.checkDistance);\n      }\n\n      return this;\n    } // Remove o evento de scroll\n\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      window.removeEventListener('scroll', this.checkDistance);\n    }\n  }]);\n\n  return ScrollAnima;\n}();\n\n\n\n//# sourceURL=webpack://projeto-03/./js/modules/scroll-anima.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar ScrollSuave = /*#__PURE__*/function () {\n  function ScrollSuave(links, options) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ScrollSuave);\n\n    this.linksInternos = document.querySelectorAll(links);\n\n    if (options === undefined) {\n      this.options = {\n        behavior: 'smooth',\n        block: 'start'\n      };\n    } else {\n      this.options = options;\n    }\n\n    this.scrolltoSection = this.scrolltoSection.bind(this);\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(ScrollSuave, [{\n    key: \"scrolltoSection\",\n    value: function scrolltoSection(event) {\n      event.preventDefault();\n      var linkHref = event.currentTarget.getAttribute('href');\n      var section = document.querySelector(linkHref);\n      section.scrollIntoView(this.options);\n    }\n  }, {\n    key: \"addLink\",\n    value: function addLink() {\n      var _this = this;\n\n      this.linksInternos.forEach(function (link) {\n        link.addEventListener('click', _this.scrolltoSection);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.linksInternos.length) {\n        this.addLink();\n      }\n\n      return this;\n    }\n  }]);\n\n  return ScrollSuave;\n}();\n\n\n\n//# sourceURL=webpack://projeto-03/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/slide.js":
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Slide = /*#__PURE__*/function () {\n  function Slide(slide, wrapper) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, Slide);\n\n    this.slide = document.querySelector(slide);\n    this.wrapper = document.querySelector(wrapper);\n    this.dist = {\n      finalPosition: 0,\n      startX: 0,\n      movement: 0\n    };\n    this.activeClass = 'active';\n    this.changeEvent = new Event('changeEvent');\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Slide, [{\n    key: \"transition\",\n    value: function transition(active) {\n      this.slide.style.transition = active ? 'transform .3s' : '';\n    }\n  }, {\n    key: \"moveSlide\",\n    value: function moveSlide(distX) {\n      this.dist.movePosition = distX;\n      this.slide.style.transform = \"translate3d(\".concat(distX, \"px,0,0)\");\n    }\n  }, {\n    key: \"updatePosition\",\n    value: function updatePosition(clientX) {\n      this.dist.movement = (this.dist.startX - clientX) * 1.6;\n      return this.dist.finalPosition - this.dist.movement;\n    }\n  }, {\n    key: \"onStart\",\n    value: function onStart(event) {\n      var moveType;\n\n      if (event.type === 'mousedown') {\n        event.preventDefault();\n        this.dist.startX = event.clientX;\n        moveType = 'mousemove';\n      } else {\n        this.dist.startX = event.changedTouches[0].clientX;\n        moveType = 'touchmove';\n      }\n\n      this.wrapper.addEventListener(moveType, this.onMove);\n      this.transition(false);\n    }\n  }, {\n    key: \"addEvents\",\n    value: function addEvents() {\n      this.wrapper.addEventListener('mousedown', this.onStart);\n      this.wrapper.addEventListener('touchstart', this.onStart);\n      this.wrapper.addEventListener('mouseup', this.onEnd);\n      this.wrapper.addEventListener('touchend', this.onEnd);\n    }\n  }, {\n    key: \"onMove\",\n    value: function onMove(event) {\n      var pointerPosition = event.type === 'mousemove' ? event.clientX : event.changedTouches[0].clientX;\n      var finalPositon = this.updatePosition(pointerPosition);\n      this.moveSlide(finalPositon);\n    }\n  }, {\n    key: \"onEnd\",\n    value: function onEnd(event) {\n      var moveType = event.type === 'mouseup' ? 'mousemove' : 'touchmove';\n      this.wrapper.removeEventListener(moveType, this.onMove);\n      this.dist.finalPosition = this.dist.movePosition;\n      this.changeSlideOnEnd();\n      this.transition(true);\n    }\n  }, {\n    key: \"changeSlideOnEnd\",\n    value: function changeSlideOnEnd() {\n      if (this.dist.movement > 120 && this.index.next !== undefined) {\n        this.activeNextSlide();\n      } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\n        this.activePrevSlide();\n      } else {\n        this.changeSlide(this.index.index);\n      }\n    }\n  }, {\n    key: \"slidePosition\",\n    value: function slidePosition(slide) {\n      var margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\n      return -(slide.offsetLeft - margin);\n    } // Slides Config\n\n  }, {\n    key: \"slidesConfig\",\n    value: function slidesConfig() {\n      var _this = this;\n\n      this.slideArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.slide.children).map(function (element) {\n        var position = _this.slidePosition(element);\n\n        return {\n          element: element,\n          position: position\n        };\n      });\n    }\n  }, {\n    key: \"slideIndexNav\",\n    value: function slideIndexNav(index) {\n      var last = this.slideArray.length - 1;\n      return this.index = {\n        prev: index ? index - 1 : undefined,\n        index: index,\n        next: index === last ? undefined : index + 1\n      };\n    }\n  }, {\n    key: \"changeSlide\",\n    value: function changeSlide(index) {\n      var activeSlide = this.slideArray[index];\n      this.moveSlide(activeSlide.position);\n      this.slideIndexNav(index);\n      this.dist.finalPosition = activeSlide.position;\n      this.changeActiveClass();\n      this.wrapper.dispatchEvent(this.changeEvent);\n    }\n  }, {\n    key: \"changeActiveClass\",\n    value: function changeActiveClass() {\n      var _this2 = this;\n\n      this.slideArray.forEach(function (item) {\n        return item.element.classList.remove(_this2.activeClass);\n      });\n      this.slideArray[this.index.index].element.classList.add(this.activeClass);\n    }\n  }, {\n    key: \"activePrevSlide\",\n    value: function activePrevSlide() {\n      if (this.index.prev !== undefined) this.changeSlide(this.index.prev);\n    }\n  }, {\n    key: \"activeNextSlide\",\n    value: function activeNextSlide() {\n      if (this.index.next !== undefined) this.changeSlide(this.index.next);\n    }\n  }, {\n    key: \"onResize\",\n    value: function onResize() {\n      var _this3 = this;\n\n      setTimeout(function () {\n        _this3.slidesConfig();\n\n        _this3.changeSlide(_this3.index.index);\n      }, 1000);\n    }\n  }, {\n    key: \"addReziseEvent\",\n    value: function addReziseEvent() {\n      window.addEventListener('resize', this.onResize);\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      this.onStart = this.onStart.bind(this);\n      this.onMove = this.onMove.bind(this);\n      this.onEnd = this.onEnd.bind(this);\n      this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this.onResize.bind(this), 200);\n      this.activeNextSlide = this.activeNextSlide.bind(this);\n      this.activePrevSlide = this.activePrevSlide.bind(this);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.bindEvents();\n      this.addEvents();\n      this.slidesConfig();\n      this.addReziseEvent();\n      this.changeSlide(2);\n      return this;\n    }\n  }]);\n\n  return Slide;\n}();\n\nvar SlideNav = /*#__PURE__*/function (_Slide) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(SlideNav, _Slide);\n\n  var _super = _createSuper(SlideNav);\n\n  function SlideNav(slide, wrapper) {\n    var _this4;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, SlideNav);\n\n    _this4 = _super.call(this, slide, wrapper);\n\n    _this4.bindControlEvents();\n\n    return _this4;\n  }\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(SlideNav, [{\n    key: \"addArrow\",\n    value: function addArrow(next, prev) {\n      this.next = document.querySelector(next);\n      this.prev = document.querySelector(prev);\n      this.addArrowEvent();\n    }\n  }, {\n    key: \"addArrowEvent\",\n    value: function addArrowEvent() {\n      this.prev.addEventListener('click', this.activePrevSlide);\n      this.next.addEventListener('click', this.activeNextSlide);\n    }\n  }, {\n    key: \"createControl\",\n    value: function createControl() {\n      var control = document.createElement('ul');\n      control.dataset.control = 'slide';\n      this.slideArray.forEach(function (item, index) {\n        control.innerHTML += \"<li><a href=\\\"#slide\".concat(index, \"\\\">\").concat(index, \"</a></li>\");\n      });\n      this.wrapper.appendChild(control);\n      return control;\n    }\n  }, {\n    key: \"eventControl\",\n    value: function eventControl(item, index) {\n      var _this5 = this;\n\n      item.addEventListener('click', function (event) {\n        event.preventDefault();\n\n        _this5.changeSlide(index);\n      });\n      this.wrapper.addEventListener('changeEvent', this.activeControlItem);\n    }\n  }, {\n    key: \"activeControlItem\",\n    value: function activeControlItem() {\n      var _this6 = this;\n\n      this.controlArray.forEach(function (item) {\n        return item.classList.remove(_this6.activeClass);\n      });\n      this.controlArray[this.index.index].classList.add(this.activeClass);\n    }\n  }, {\n    key: \"addControl\",\n    value: function addControl(customControl) {\n      this.control = document.querySelector(customControl) || this.createControl();\n      this.controlArray = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.control.children);\n      this.controlArray.forEach(this.eventControl);\n      this.activeControlItem();\n    }\n  }, {\n    key: \"bindControlEvents\",\n    value: function bindControlEvents() {\n      this.eventControl = this.eventControl.bind(this);\n      this.activeControlItem = this.activeControlItem.bind(this);\n    }\n  }]);\n\n  return SlideNav;\n}(Slide);\n\n\n\n//# sourceURL=webpack://projeto-03/./js/modules/slide.js?");

/***/ }),

/***/ "./js/modules/tab-nav.js":
/*!*******************************!*\
  !*** ./js/modules/tab-nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar TabNav = /*#__PURE__*/function () {\n  function TabNav(menu, content) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, TabNav);\n\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabcontent = document.querySelectorAll(content);\n    this.activeClass = 'ativo';\n  } // Ativa a tab de acordo com o index da mesma\n\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(TabNav, [{\n    key: \"activeTab\",\n    value: function activeTab(index) {\n      this.tabcontent.forEach(function (section) {\n        section.classList.remove('ativo');\n      });\n      var dataset = this.tabcontent[index].dataset.anime;\n      this.tabcontent[index].classList.add('ativo', dataset);\n    } // Adiciona os eventos nas tabs\n\n  }, {\n    key: \"addTabNavEvent\",\n    value: function addTabNavEvent() {\n      var _this = this;\n\n      this.tabMenu.forEach(function (item, index) {\n        item.addEventListener('click', function () {\n          return _this.activeTab(index);\n        });\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.tabMenu.length && this.tabcontent.length) {\n        // Ativar primeiro item\n        this.activeTab(0);\n        this.addTabNavEvent();\n      }\n\n      return this;\n    }\n  }]);\n\n  return TabNav;\n}();\n\n\n\n//# sourceURL=webpack://projeto-03/./js/modules/tab-nav.js?");

/***/ }),

/***/ "./js/modules/tooltips.js":
/*!********************************!*\
  !*** ./js/modules/tooltips.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar Tooltip = /*#__PURE__*/function () {\n  function Tooltip(toolTips) {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Tooltip);\n\n    this.toolTip = document.querySelectorAll(toolTips); // bind do objeto da class aos callbacks\n\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onMouseOver = this.onMouseOver.bind(this);\n  } // Move a tooltip box em relaçao ao cursor do mouse\n\n\n  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Tooltip, [{\n    key: \"onMouseMove\",\n    value: function onMouseMove(event) {\n      this.toolTipBox.style.top = \"\".concat(event.pageY + 15, \"px\");\n\n      if (event.pageX + 240 > window.innerWidth) {\n        this.toolTipBox.style.left = \"\".concat(event.pageX - 190, \"px\");\n      } else {\n        this.toolTipBox.style.left = \"\".concat(event.pageX + 15, \"px\");\n      }\n    } // Remove os eventos de mouseleave e mousemove ao sair do target\n    // Remove a tooltip\n\n  }, {\n    key: \"onMouseLeave\",\n    value: function onMouseLeave(_ref) {\n      var currentTarget = _ref.currentTarget;\n      this.toolTipBox.remove();\n      currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\n      currentTarget.removeEventListener('mousemove', this.onMouseMove);\n    } // Cria a tooltip box e coloca no body\n\n  }, {\n    key: \"criarToolTipBox\",\n    value: function criarToolTipBox(element) {\n      var toolTipBox = document.createElement('div');\n      var text = element.getAttribute('aria-label');\n      toolTipBox.classList.add('tooltip');\n      toolTipBox.innerText = text;\n      document.body.appendChild(toolTipBox);\n      this.toolTipBox = toolTipBox;\n    } // cria a tooltip box e adiciona os eventos\n    // mousemove e mouseleave ao target\n\n  }, {\n    key: \"onMouseOver\",\n    value: function onMouseOver(_ref2) {\n      var currentTarget = _ref2.currentTarget;\n      this.criarToolTipBox(currentTarget);\n      currentTarget.addEventListener('mouseleave', this.onMouseLeave);\n      currentTarget.addEventListener('mousemove', this.onMouseMove);\n    } // Adiciona os eventos de mouseover a cada tooltip\n\n  }, {\n    key: \"addTolltipsEvent\",\n    value: function addTolltipsEvent() {\n      var _this = this;\n\n      this.toolTip.forEach(function (item) {\n        item.addEventListener('mouseover', _this.onMouseOver);\n      });\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      if (this.toolTip.length) {\n        this.addTolltipsEvent();\n      }\n\n      return this;\n    }\n  }]);\n\n  return Tooltip;\n}();\n\n\n\n//# sourceURL=webpack://projeto-03/./js/modules/tooltips.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./js/modules/scroll-anima.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./js/modules/tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltips_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltips.js */ \"./js/modules/tooltips.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_anima_numeros_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_btc_fetch_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/btc-fetch.js */ \"./js/modules/btc-fetch.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/slide.js */ \"./js/modules/slide.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\nvar accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-anime =\"accordion\"] dt');\naccordion.init();\nvar tabNav = new _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\nvar modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\nvar toolTips = new _modules_tooltips_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-tooltip]');\ntoolTips.init();\nvar animaNumero = new _modules_anima_numeros_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]('[data-numero]', '.numeros', 'ativo');\nanimaNumero.init();\nvar animaScroll = new _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime =\"scroll\"]');\nanimaScroll.init();\nvar dropdownMenu = new _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]('[data-dropdown]');\ndropdownMenu.init();\nvar menuMobile = new _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]('[data-menu=\"button\"]', '[data-menu=\"list\"]');\nmenuMobile.init();\nvar funcionamento = new _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]('[data-semana]', 'aberto');\nfuncionamento.init();\n(0,_modules_btc_fetch_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])('https://blockchain.info/ticker', '.btc-preco');\nvar slide = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]('.slide', '.slide-wrapper');\nslide.init();\nslide.addControl('.custom-controls');\n\n//# sourceURL=webpack://projeto-03/./js/script.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayLikeToArray)\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\n//# sourceURL=webpack://projeto-03/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithoutHoles)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://projeto-03/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _assertThisInitialized)\n/* harmony export */ });\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\n//# sourceURL=webpack://projeto-03/./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://projeto-03/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://projeto-03/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _getPrototypeOf)\n/* harmony export */ });\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\n//# sourceURL=webpack://projeto-03/./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _inherits)\n/* harmony export */ });\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  Object.defineProperty(subClass, \"prototype\", {\n    writable: false\n  });\n  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subClass, superClass);\n}\n\n//# sourceURL=webpack://projeto-03/./node_modules/@babel/runtime/helpers/esm/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArray)\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://projeto-03/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableSpread)\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://projeto-03/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _possibleConstructorReturn)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\"Derived constructors may only return object or undefined\");\n  }\n\n  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(self);\n}\n\n//# sourceURL=webpack://projeto-03/./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _setPrototypeOf)\n/* harmony export */ });\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n  return _setPrototypeOf(o, p);\n}\n\n//# sourceURL=webpack://projeto-03/./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _toConsumableArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://projeto-03/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, _typeof(obj);\n}\n\n//# sourceURL=webpack://projeto-03/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _unsupportedIterableToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://projeto-03/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;