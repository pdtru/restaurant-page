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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/assets/images/restaurant.jpg */ \"./src/assets/images/restaurant.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Nunito+Sans:opsz,wght@6..12,200&family=PT+Sans+Narrow&family=Parisienne&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  font-family: 'Nunito Sans', sans-serif;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 16px 0px;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.mobile-header {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 4em 0;\r\n  width: 100%;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.nav-container {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 28px;\r\n}\r\n\r\n.mobile-nav-container {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.nav-button {\r\n  display: block;\r\n  position: relative;\r\n  padding: 0.2em 0;\r\n  font-family: 'Montserrat';\r\n  color: white;\r\n  font-size: 24px;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n.nav-button:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-button::after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 0.1em;\r\n  background-color: white;\r\n  opacity: 0;\r\n  transition: opacity 300ms, transform 300ms;\r\n}\r\n\r\n.nav-button:hover::after {\r\n  opacity: 1;\r\n  transform: translate3d(0, 0.2em, 0);\r\n}\r\n\r\n.mobile-nav-button {\r\n  position: relative;\r\n  padding: 0.2em 0;\r\n  font-family: 'Montserrat';\r\n  color: white;\r\n  font-size: 3em;\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\n.mobile-nav-button::after {\r\n  content: '';\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 0.1em;\r\n  background-color: white;\r\n  opacity: 0;\r\n  transition: opacity 300ms, transform 300ms;\r\n}\r\n\r\n.mobile-nav-button:hover::after {\r\n  opacity: 1;\r\n  transform: translate3d(0, 0.2em, 0);\r\n}\r\n\r\n.page {\r\n  flex: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.home {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 16px;\r\n  color: white;\r\n}\r\n\r\n.home-hero {\r\n  align-self: center;\r\n  font-family: 'Montserrat';\r\n  font-size: 3rem;\r\n}\r\n\r\n.home-logo {\r\n  align-self: center;\r\n  font-family: 'Parisienne', cursive;\r\n  font-size: 7rem;\r\n}\r\n\r\n.menu {\r\n  flex: 1;\r\n  padding: 8%;\r\n  display: flex;\r\n  gap: 32px;\r\n  background-color: white;\r\n}\r\n\r\n.mobile-menu {\r\n  margin: 10%;\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  background-color: white;\r\n}\r\n\r\n.course {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n}\r\n\r\n.mobile-course {\r\n  margin: 10%;\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n}\r\n\r\n.menu-title {\r\n  font-family: 'PT Sans Narrow';\r\n  font-size: 200%;\r\n}\r\n\r\n.menu-item {\r\n  font-size: 100%;\r\n  font-weight: 500;\r\n}\r\n\r\n.menu-sub-text {\r\n  font-size: 80%;\r\n}\r\n\r\n.gallery {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr;\r\n}\r\n\r\n.mobile-gallery {\r\n  margin: 10%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-content: center;\r\n}\r\n\r\n.gallery-img {\r\n  height: 10em;\r\n  width: 20em;\r\n}\r\n\r\n.mobile-gallery-img {\r\n  height: 80%;\r\n  width: 100%;\r\n}\r\n\r\n.about-container {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 32px;\r\n  padding: 3%;\r\n  background-color: white;\r\n}\r\n\r\n.about-story-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 10px;\r\n  width: 60%;\r\n}\r\n\r\n.mobile-about-story-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 10px;\r\n  margin: 10%;\r\n  width: 60%;\r\n}\r\n\r\n.about-story-logo {\r\n  font-family: 'Parisienne', cursive;\r\n  font-size: 200%;\r\n}\r\n\r\n.mobile-about-story-logo {\r\n  font-family: 'Parisienne', cursive;\r\n  font-size: 400%;\r\n}\r\n\r\n.about-story-header {\r\n  font-family: 'PT Sans Narrow';\r\n  font-size: 200%;\r\n  font-weight: 600;\r\n  margin-top: -20px;\r\n}\r\n\r\n.mobile-about-story-header {\r\n  font-family: 'PT Sans Narrow';\r\n  font-size: 300%;\r\n  font-weight: 600;\r\n  margin-top: -20px;\r\n}\r\n\r\n.about-story-text {\r\n  width: 60%;\r\n}\r\n\r\n.mobile-about-story-text {\r\n  padding-top: 32px;\r\n  font-size: 150%;\r\n}\r\n\r\n.about-chef-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: left;\r\n  gap: 10px;\r\n  width: 60%;\r\n}\r\n\r\n.mobile-about-chef-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: left;\r\n  gap: 10px;\r\n  margin: 0% 10% 10% 10%;\r\n  width: 60%;\r\n}\r\n\r\n.about-chef-header {\r\n  font-family: 'Parisienne', cursive;\r\n  font-size: 200%;\r\n}\r\n\r\n.mobile-about-chef-header {\r\n  font-family: 'Parisienne', cursive;\r\n  font-size: 400%;\r\n}\r\n\r\n.about-chef-sub-header {\r\n  font-family: 'PT Sans Narrow';\r\n  font-weight: 600;\r\n  font-size: 200%;\r\n  margin-top: -20px;\r\n}\r\n\r\n.mobile-about-chef-sub-header {\r\n  font-family: 'PT Sans Narrow';\r\n  font-size: 300%;\r\n  font-weight: 600;\r\n  margin-top: -20px;\r\n}\r\n\r\n.about-chef {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 16px;\r\n  text-align: center;\r\n}\r\n\r\n.about-chef-text {\r\n  width: 60%;\r\n}\r\n\r\n.mobile-about-chef-text {\r\n  padding-top: 16px;\r\n  font-size: 150%;\r\n}\r\n\r\n.sanji {\r\n  border-radius: 8in;\r\n  height: 20%;\r\n  width: 20%;\r\n}\r\n\r\n.mobile-sanji {\r\n  padding-top: 32px;\r\n  border-radius: 8in;\r\n  height: 60%;\r\n  width: 60%;\r\n}\r\n\r\n.footer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  color: rgb(199, 195, 195);\r\n}\r\n\r\n.fa-github {\r\n  font-size: 24px;\r\n  color: #6e5494;\r\n  transition: transform 0.5s ease-in-out;\r\n}\r\n\r\n.fa-github:hover {\r\n  color: #8a77a5;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AboutChef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutChef */ \"./src/components/AboutChef.js\");\n/* harmony import */ var _AboutStory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutStory */ \"./src/components/AboutStory.js\");\n\r\n\r\n\r\nclass About {\r\n  aboutStory = new _AboutStory__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  aboutChef = new _AboutChef__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n  render = () => {\r\n    const container = document.createElement('div');\r\n    container.className = 'about-container';\r\n\r\n    container.append(this.aboutStory.render(), this.aboutChef.render());\r\n    return container;\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/About.js?");

/***/ }),

/***/ "./src/components/AboutChef.js":
/*!*************************************!*\
  !*** ./src/components/AboutChef.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass AboutChef {\r\n  cotainerClassName;\r\n  headerClassName;\r\n  subHeaderClassName;\r\n  textClassName;\r\n  sanjiClassName;\r\n\r\n  calculateLayout = () => {\r\n    if (window.innerWidth < window.innerHeight) {\r\n      this.cotainerClassName = 'mobile-about-chef-container';\r\n      this.headerClassName = 'mobile-about-chef-header';\r\n      this.subHeaderClassName = 'mobile-about-chef-sub-header';\r\n      this.textClassName = 'mobile-about-chef-text';\r\n      this.sanjiClassName = 'mobile-sanji';\r\n    } else {\r\n      this.cotainerClassName = 'about-chef-container';\r\n      this.headerClassName = 'about-chef-header';\r\n      this.subHeaderClassName = 'about-chef-sub-header';\r\n      this.textClassName = 'about-chef-text';\r\n      this.sanjiClassName = 'sanji';\r\n    }\r\n  };\r\n\r\n  render = () => {\r\n    this.calculateLayout();\r\n    const container = document.createElement('div');\r\n    container.className = this.cotainerClassName;\r\n\r\n    const header = document.createElement('p');\r\n    header.className = this.headerClassName;\r\n    header.innerText = 'Meet Our';\r\n\r\n    const subHeader = document.createElement('p');\r\n    subHeader.className = this.subHeaderClassName;\r\n    subHeader.innerText = 'CHEF';\r\n\r\n    const chefContainer = document.createElement('div');\r\n    chefContainer.className = 'about-chef';\r\n\r\n    const text = document.createElement('p');\r\n    text.className = this.textClassName;\r\n    text.innerText =\r\n      'At the heart of our kitchen stands the indomitable culinary genius, Owner and Head Chef Sanji. Sanji brings to life a menu that mirrors his adventurous spirit - each dish a masterpiece, an embodiment of his passion and mastery over both Japanese and French cuisine.';\r\n\r\n    const sanji = document.createElement('img');\r\n    sanji.className = this.sanjiClassName;\r\n    sanji.src = '/src/assets/images/sanji.jpg';\r\n\r\n    chefContainer.append(sanji, text);\r\n    container.append(header, subHeader, chefContainer);\r\n    return container;\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutChef);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/AboutChef.js?");

/***/ }),

/***/ "./src/components/AboutStory.js":
/*!**************************************!*\
  !*** ./src/components/AboutStory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass AboutStory {\r\n  containerClassName;\r\n  logoClassName;\r\n  headerClassName;\r\n  textClassName;\r\n\r\n  calculateLayout = () => {\r\n    if (window.innerWidth < window.innerHeight) {\r\n      this.containerClassName = 'mobile-about-story-container';\r\n      this.logoClassName = 'mobile-about-story-logo';\r\n      this.headerClassName = 'mobile-about-story-header';\r\n      this.textClassName = 'mobile-about-story-text';\r\n    } else {\r\n      this.containerClassName = 'about-story-container';\r\n      this.logoClassName = 'about-story-logo';\r\n      this.headerClassName = 'about-story-header';\r\n      this.textClassName = 'about-story-text';\r\n    }\r\n  };\r\n\r\n  render = () => {\r\n    this.calculateLayout();\r\n    const container = document.createElement('div');\r\n    container.className = this.containerClassName;\r\n\r\n    const logo = document.createElement('p');\r\n    logo.className = this.logoClassName;\r\n    logo.innerText = 'Tout Bleu';\r\n\r\n    const header = document.createElement('p');\r\n    header.className = this.headerClassName;\r\n    header.innerText = 'STORY';\r\n\r\n    const text = document.createElement('p');\r\n    text.className = this.textClassName;\r\n    text.innerText =\r\n      \"Welcome to Tout Bleu where you'll immerse yourself in the harmonious elegance of the French and Japanese culinary arts. At Tout Bleu, we invite you on a gastronomic journey that transcends borders and indulges your senses in the harmonious blend of French and Japanese culinary traditions. Nestled at the heart of the Grand Line, our restaurant is a serene oasis where innovation meets authenticity, and where every dish tells a story of cultural fusion.\";\r\n\r\n    container.append(logo, header, text);\r\n    return container;\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutStory);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/AboutStory.js?");

/***/ }),

/***/ "./src/components/Dessert.js":
/*!***********************************!*\
  !*** ./src/components/Dessert.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MenuTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuTitle */ \"./src/components/MenuTitle.js\");\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ \"./src/components/MenuItem.js\");\n\r\n\r\n\r\nclass Dessert {\r\n  menuTitle = new _MenuTitle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('DESSERT');\r\n  bûcheNoël = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n    'BÛCHE DE NOËL',\r\n    'Layers of sponge cake and velvety fillings, intricately rolled and adorned with festive decorations'\r\n  );\r\n  lemonCake = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n    'LEMON CURD ITALIANO SEMIFREDDO',\r\n    'A frozen delicacy that marries the zesty allure of lemon curd with the creamy charm of Italian semifreddo'\r\n  );\r\n  soufflé = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n    'SOUFFLÉ LÉGER DE GRÂCE',\r\n    \"Delicate flavors ascend in a cloud-like confection that's both airy and rich\"\r\n  );\r\n\r\n  className = 'mobile-course';\r\n\r\n  calculateLayout = () => {\r\n    if (window.innerWidth < window.innerHeight) {\r\n      this.className = 'mobile-course';\r\n    } else {\r\n      this.className = 'course';\r\n    }\r\n  };\r\n\r\n  render() {\r\n    this.calculateLayout();\r\n    const container = document.createElement('div');\r\n    container.className = this.className;\r\n    container.append(\r\n      this.menuTitle.render(),\r\n      this.bûcheNoël.render(),\r\n      this.lemonCake.render(),\r\n      this.soufflé.render()\r\n    );\r\n    return container;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dessert);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/Dessert.js?");

/***/ }),

/***/ "./src/components/Drinks.js":
/*!**********************************!*\
  !*** ./src/components/Drinks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MenuTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuTitle */ \"./src/components/MenuTitle.js\");\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ \"./src/components/MenuItem.js\");\n\r\n\r\n\r\nclass Drinks {\r\n  menuTitle = new _MenuTitle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('DRINKS');\r\n  blanc = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n    'BLANC DE BLANC',\r\n    'Familiar aromas of grape jelly, cherry turnover, and cinnamon'\r\n  );\r\n  pinot = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('LUX PINOT NOIR', 'Ripe red fruit and earthy aromas');\r\n  rosé = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n    'SPARKLING ROSÉ',\r\n    'Creamy with strawberry and crisp green apple flavors'\r\n  );\r\n\r\n  className = 'mobile-course';\r\n\r\n  calculateLayout = () => {\r\n    if (window.innerWidth < window.innerHeight) {\r\n      this.className = 'mobile-course';\r\n    } else {\r\n      this.className = 'course';\r\n    }\r\n  };\r\n\r\n  render() {\r\n    this.calculateLayout();\r\n    const container = document.createElement('div');\r\n    container.className = this.className;\r\n    container.append(\r\n      this.menuTitle.render(),\r\n      this.blanc.render(),\r\n      this.pinot.render(),\r\n      this.rosé.render()\r\n    );\r\n    return container;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drinks);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/Drinks.js?");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Footer {\r\n  render = () => {\r\n    const container = document.createElement('div');\r\n    container.className = 'footer';\r\n\r\n    const footer = document.createElement('p');\r\n    footer.innerHTML = 'Copyright © 2023 pdtru&nbsp';\r\n    container.appendChild(footer);\r\n\r\n    const github = document.createElement('a');\r\n    github.href = 'https://github.com/pdtru';\r\n    footer.appendChild(github);\r\n\r\n    const githubIcon = document.createElement('i');\r\n    githubIcon.className = 'fa-brands fa-github';\r\n    github.appendChild(githubIcon);\r\n    return container;\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Gallery.js":
/*!***********************************!*\
  !*** ./src/components/Gallery.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Gallery {\r\n  className;\r\n  imgClassName;\r\n\r\n  calculateLayout = () => {\r\n    if (window.innerWidth < window.innerHeight) {\r\n      this.className = 'mobile-gallery';\r\n      this.imgClassName = 'mobile-gallery-img';\r\n    } else {\r\n      this.className = 'gallery';\r\n      this.imgClassName = 'gallery-img';\r\n    }\r\n  };\r\n\r\n  render = () => {\r\n    this.calculateLayout();\r\n    const container = document.createElement('div');\r\n    container.className = this.className;\r\n\r\n    const noël = document.createElement('img');\r\n    noël.className = this.imgClassName;\r\n    noël.src = '/src/assets/images/food/bûche-de-noël.jpg';\r\n\r\n    const bûche = document.createElement('img');\r\n    bûche.className = this.imgClassName;\r\n    bûche.src = '/src/assets/images/food/five-amuse-bouches.jpg';\r\n\r\n    const hainanese = document.createElement('img');\r\n    hainanese.className = this.imgClassName;\r\n    hainanese.src = '/src/assets/images/food/hainanese-chicken.jpg';\r\n\r\n    const véritable = document.createElement('img');\r\n    véritable.className = this.imgClassName;\r\n    véritable.src = '/src/assets/images/food/le-plat-véritable.jpg';\r\n\r\n    const lemon = document.createElement('img');\r\n    lemon.className = this.imgClassName;\r\n    lemon.src = '/src/assets/images/food/lemon-cake.jpg';\r\n\r\n    const meat = document.createElement('img');\r\n    meat.className = this.imgClassName;\r\n    meat.src = '/src/assets/images/food/meat-on-stick.jpg';\r\n\r\n    const mushroom = document.createElement('img');\r\n    mushroom.className = this.imgClassName;\r\n    mushroom.src = '/src/assets/images/food/mushroom-mille-feuille.jpg';\r\n\r\n    const okakiage = document.createElement('img');\r\n    okakiage.className = this.imgClassName;\r\n    okakiage.src = '/src/assets/images/food/okakiage-tempura.jpg';\r\n\r\n    const quail = document.createElement('img');\r\n    quail.className = this.imgClassName;\r\n    quail.src = '/src/assets/images/food/quail-stuffed-with-risotto.jpg';\r\n\r\n    const soba = document.createElement('img');\r\n    soba.className = this.imgClassName;\r\n    soba.src = '/src/assets/images/food/shooting-star-soba.jpg';\r\n\r\n    const souffle = document.createElement('img');\r\n    souffle.className = this.imgClassName;\r\n    souffle.src = '/src/assets/images/food/souffle-leger-de-grace.jpg';\r\n\r\n    const terrine = document.createElement('img');\r\n    terrine.className = this.imgClassName;\r\n    terrine.src = '/src/assets/images/food/terrine.jpg';\r\n\r\n    container.append(\r\n      noël,\r\n      bûche,\r\n      hainanese,\r\n      véritable,\r\n      lemon,\r\n      meat,\r\n      mushroom,\r\n      okakiage,\r\n      quail,\r\n      soba,\r\n      souffle,\r\n      terrine\r\n    );\r\n    return container;\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/Gallery.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavBar */ \"./src/components/NavBar.js\");\n\r\n\r\nclass Header {\r\n  navBar = new _NavBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n  className;\r\n\r\n  calculateLayout = () => {\r\n    if (window.innerWidth < window.innerHeight) {\r\n      this.className = 'mobile-header';\r\n    } else {\r\n      this.className = 'header';\r\n    }\r\n  };\r\n\r\n  render = () => {\r\n    this.calculateLayout();\r\n    const container = document.createElement('div');\r\n    container.className = this.className;\r\n    container.appendChild(this.navBar.render());\r\n    return container;\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/Header.js?");

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Home {\r\n  render = () => {\r\n    const container = document.createElement('div');\r\n    container.className = 'home';\r\n\r\n    const text = document.createElement('p');\r\n    text.className = 'home-hero';\r\n    text.innerText = 'Welcome to';\r\n\r\n    const logo = document.createElement('p');\r\n    logo.className = 'home-logo';\r\n    logo.innerText = 'Tout Bleu';\r\n\r\n    container.append(text, logo);\r\n    return container;\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/Home.js?");

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MenuTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuTitle */ \"./src/components/MenuTitle.js\");\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ \"./src/components/MenuItem.js\");\n\r\n\r\n\r\nclass Main {\r\n  menuTitle = new _MenuTitle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('MAIN');\r\n  hainanese = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n    'HAINANESE CHICKEN',\r\n    'Poached chicken and fragrant rice in a symphony of southeast asian spices'\r\n  );\r\n  oyakodon = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n    'LE-PLAT-VÉRITABLE',\r\n    'Tender chicken and velvety eggs in harmonious union'\r\n  );\r\n  meat = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('MEAT ON BONE', 'Juicy meat adorned on primal bone');\r\n  soba = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n    'SHOOTING STAR SOBA',\r\n    'Delicate buckwheat noodles in savory broth'\r\n  );\r\n\r\n  className = 'mobile-course';\r\n\r\n  calculateLayout = () => {\r\n    if (window.innerWidth < window.innerHeight) {\r\n      this.className = 'mobile-course';\r\n    } else {\r\n      this.className = 'course';\r\n    }\r\n  };\r\n\r\n  render() {\r\n    this.calculateLayout();\r\n    const container = document.createElement('div');\r\n    container.className = this.className;\r\n    container.append(\r\n      this.menuTitle.render(),\r\n      this.hainanese.render(),\r\n      this.oyakodon.render(),\r\n      this.meat.render(),\r\n      this.soba.render()\r\n    );\r\n    return container;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/Main.js?");

/***/ }),

/***/ "./src/components/Menu.js":
/*!********************************!*\
  !*** ./src/components/Menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Starters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Starters */ \"./src/components/Starters.js\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ \"./src/components/Main.js\");\n/* harmony import */ var _Dessert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dessert */ \"./src/components/Dessert.js\");\n/* harmony import */ var _Drinks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Drinks */ \"./src/components/Drinks.js\");\n\r\n\r\n\r\n\r\n\r\nclass Menu {\r\n  starters = new _Starters__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n  main = new _Main__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  dessert = new _Dessert__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n  drinks = new _Drinks__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\n  className;\r\n\r\n  calculateLayout = () => {\r\n    if (window.innerWidth < window.innerHeight) {\r\n      this.className = 'mobile-menu';\r\n    } else {\r\n      this.className = 'menu';\r\n    }\r\n  };\r\n\r\n  render = () => {\r\n    this.calculateLayout();\r\n    const container = document.createElement('div');\r\n    container.className = this.className;\r\n    container.append(\r\n      this.starters.render(),\r\n      this.main.render(),\r\n      this.dessert.render(),\r\n      this.drinks.render()\r\n    );\r\n    return container;\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/Menu.js?");

/***/ }),

/***/ "./src/components/MenuItem.js":
/*!************************************!*\
  !*** ./src/components/MenuItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MenuItem {\r\n  constructor(text, subtext) {\r\n    this.text = text;\r\n    this.subtext = subtext;\r\n  }\r\n\r\n  render() {\r\n    const menuItem = document.createElement('p');\r\n    menuItem.className = 'menu-item';\r\n    menuItem.innerText = this.text;\r\n\r\n    const itemSubText = document.createElement('p');\r\n    itemSubText.className = 'menu-sub-text';\r\n    itemSubText.innerText = this.subtext;\r\n\r\n    menuItem.appendChild(itemSubText);\r\n    return menuItem;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/MenuItem.js?");

/***/ }),

/***/ "./src/components/MenuTitle.js":
/*!*************************************!*\
  !*** ./src/components/MenuTitle.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MenuTitle {\r\n  constructor(text) {\r\n    this.text = text;\r\n  }\r\n\r\n  render() {\r\n    const container = document.createElement('p');\r\n    container.className = 'menu-title';\r\n    container.innerText = this.text;\r\n    return container;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuTitle);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/MenuTitle.js?");

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavButton */ \"./src/components/NavButton.js\");\n\r\n\r\nclass NavBar {\r\n  home = new _NavButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Home');\r\n  menu = new _NavButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Menu');\r\n  gallery = new _NavButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Gallery');\r\n  about = new _NavButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('About');\r\n\r\n  className;\r\n\r\n  calculateLayout = () => {\r\n    if (window.innerWidth < window.innerHeight) {\r\n      this.className = 'mobile-nav-container';\r\n    } else {\r\n      this.className = 'nav-container';\r\n    }\r\n  };\r\n\r\n  render = () => {\r\n    this.calculateLayout();\r\n    const container = document.createElement('div');\r\n    container.className = this.className;\r\n    container.append(\r\n      this.home.render(),\r\n      this.menu.render(),\r\n      this.gallery.render(),\r\n      this.about.render()\r\n    );\r\n    return container;\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/NavBar.js?");

/***/ }),

/***/ "./src/components/NavButton.js":
/*!*************************************!*\
  !*** ./src/components/NavButton.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.js\");\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ \"./src/components/Home.js\");\n/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ \"./src/components/Menu.js\");\n/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gallery */ \"./src/components/Gallery.js\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./About */ \"./src/components/About.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass NavButton {\r\n  constructor(text) {\r\n    this.text = text;\r\n  }\r\n  className;\r\n\r\n  calculateLayout = () => {\r\n    if (window.innerWidth < window.innerHeight) {\r\n      this.className = 'mobile-nav-button';\r\n    } else {\r\n      this.className = 'nav-button';\r\n    }\r\n  };\r\n\r\n  render = () => {\r\n    this.calculateLayout();\r\n    const container = document.createElement('button');\r\n    container.className = this.className;\r\n    container.innerText = this.text;\r\n    container.onclick = this.onClick;\r\n    return container;\r\n  };\r\n\r\n  onClick = () => {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = '';\r\n    switch (this.text) {\r\n      case 'Menu':\r\n        ___WEBPACK_IMPORTED_MODULE_0__.page.component = new _Menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n        break;\r\n      case 'Gallery':\r\n        ___WEBPACK_IMPORTED_MODULE_0__.page.component = new _Gallery__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n        break;\r\n      case 'About':\r\n        ___WEBPACK_IMPORTED_MODULE_0__.page.component = new _About__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\n        break;\r\n      default:\r\n        ___WEBPACK_IMPORTED_MODULE_0__.page.component = new _Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        break;\r\n    }\r\n    (0,___WEBPACK_IMPORTED_MODULE_0__.render)();\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavButton);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/NavButton.js?");

/***/ }),

/***/ "./src/components/Page.js":
/*!********************************!*\
  !*** ./src/components/Page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/components/Home.js\");\n\r\n\r\nclass Page {\r\n  constructor() {\r\n    this.component = new _Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n  }\r\n\r\n  render = () => {\r\n    const container = document.createElement('div');\r\n    container.className = 'page';\r\n    container.id = 'content';\r\n    container.append(this.component.render());\r\n    return container;\r\n  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/Page.js?");

/***/ }),

/***/ "./src/components/Starters.js":
/*!************************************!*\
  !*** ./src/components/Starters.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MenuTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuTitle */ \"./src/components/MenuTitle.js\");\n/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItem */ \"./src/components/MenuItem.js\");\n\r\n\r\n\r\nclass Starters {\r\n  menuTitle = new _MenuTitle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('STARTERS');\r\n  amuseBouches = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n    'FIVE AMUSE BOUCHES',\r\n    'Delicate preludes to delightful gastronomy'\r\n  );\r\n  milleFeuille = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n    'MUSHROOM MILLE FEUILLE',\r\n    'Layers of buttery puff pastry embrace a symphony of wild mushrooms'\r\n  );\r\n  okakiage = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n    'OKAKIAGE TEMPURA',\r\n    'A medley of meticulously battered and fried seasonal vegetables and seafood'\r\n  );\r\n  terrine = new _MenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n    'RAINBOW TERRINE',\r\n    'Harmonizing layers of fresh ingredients into a visually stunning composition'\r\n  );\r\n\r\n  className = 'mobile-course';\r\n\r\n  calculateLayout = () => {\r\n    if (window.innerWidth < window.innerHeight) {\r\n      this.className = 'mobile-course';\r\n    } else {\r\n      this.className = 'course';\r\n    }\r\n  };\r\n\r\n  render() {\r\n    this.calculateLayout();\r\n    const container = document.createElement('div');\r\n    container.className = this.className;\r\n    container.append(\r\n      this.menuTitle.render(),\r\n      this.amuseBouches.render(),\r\n      this.milleFeuille.render(),\r\n      this.okakiage.render(),\r\n      this.terrine.render()\r\n    );\r\n    return container;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Starters);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/Starters.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footer: () => (/* binding */ footer),\n/* harmony export */   header: () => (/* binding */ header),\n/* harmony export */   page: () => (/* binding */ page),\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _src_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../src/styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Page */ \"./src/components/Page.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer */ \"./src/components/Footer.js\");\n\r\n\r\n\r\n\r\n\r\nconst header = new _components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst page = new _components_Page__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst footer = new _components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\nconst body = document.body;\r\nconst render = () => {\r\n  body.innerHTML = '';\r\n  body.append(header.render(), page.render(), footer.render());\r\n};\r\nrender();\r\n\r\n(function () {\r\n  addEventListener('load', render);\r\n  addEventListener('resize', render);\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/assets/images/restaurant.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/restaurant.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89daf5b079f177b36ffc.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/assets/images/restaurant.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;