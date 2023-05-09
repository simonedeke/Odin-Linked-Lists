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

/***/ "./src/LinkedList.js":
/*!***************************!*\
  !*** ./src/LinkedList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LinkedList\": () => (/* binding */ LinkedList)\n/* harmony export */ });\n/* harmony import */ var _newNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newNode.js */ \"./src/newNode.js\");\n\r\n\r\nconst LinkedList = () => {\r\n    \r\n    let _tail = null;\r\n    let _head = null;\r\n    let _size = 0;\r\n\r\n    function append(node){\r\n        (_head == null) ? _head= node : _tail.nextNode = node;\r\n        _tail = node;  \r\n        _size++;      \r\n    }\r\n    function prepend(node){\r\n        (_head == null) ? _head= node : _head.nextNode = _head;\r\n        _head = node;  \r\n        _size++;      \r\n    }\r\n    function size(){\r\n        return _size;\r\n    }\r\n    function head(){\r\n        return _head;\r\n    }\r\n    function tail(){\r\n        return _tail;\r\n    }\r\n    function at(index){\r\n        if(index >= _size){\r\n            return null;\r\n        }\r\n        else {\r\n            let before = _head\r\n            let nxt = _head;\r\n            for(let i = 0; i <= index; i++) {\r\n                nxt = before;\r\n                before = nxt.nextNode;\r\n            }\r\n            return nxt;\r\n        }\r\n        \r\n    }\r\n    function pop(){\r\n        if(_head == null){\r\n            return null;\r\n        }\r\n        else if (_head == _tail) {\r\n            let tmp = _head;\r\n            _head = null;\r\n            _tail = null;\r\n            _size = 0;\r\n            return tmp;\r\n        }\r\n        else {\r\n            let before = _head\r\n            let nxt = _head;\r\n            while(before.nextNode){\r\n                nxt = before;\r\n                before = nxt.nextNode;\r\n            }\r\n            _tail = nxt;\r\n            _tail.nextNode = null;\r\n            _size--;\r\n            return before;\r\n        }\r\n    }\r\n    function contains(value){\r\n        if(_head.value == value){\r\n            return true;\r\n        }\r\n        else {\r\n            let before = _head;\r\n            let nxt = _head;\r\n            for(let i = 0; i <= _size; i++) {\r\n                if(before.value == value){\r\n                    return true;\r\n                } \r\n                else {\r\n                    nxt = before;\r\n                    before = nxt.nextNode;\r\n                }\r\n            }\r\n            return false;\r\n        }\r\n    }\r\n    function find(value){\r\n        if(_head.value == value){\r\n            return 0;\r\n        }\r\n        else {\r\n            let before = _head\r\n            let nxt = _head;\r\n            for(let i = 0; i <= _size; i++) {\r\n                if(before.value == value){\r\n                    return i;\r\n                }\r\n                nxt = before;\r\n                before = nxt.nextNode;\r\n            }\r\n            return null;\r\n        }\r\n    }\r\n    function toString(){\r\n        let currentNode = _head;\r\n        let nextNode = currentNode.nextNode;\r\n        let outputString = \"\";\r\n        while(nextNode != null)\r\n        {\r\n            outputString += (\"( \" + currentNode.value + \" ) -> \");\r\n            nextNode = currentNode.nextNode;\r\n            currentNode = nextNode;\r\n        }\r\n        return outputString += nextNode;\r\n    }\r\n    function insertAt(value, index){\r\n        if(index == 0){\r\n            const tmp = (0,_newNode_js__WEBPACK_IMPORTED_MODULE_0__.newNode)(value,_head);\r\n            _head = tmp;\r\n            _size++;\r\n            return 'successfully inserted';\r\n        }\r\n        else if (index >= _size) {\r\n            let tmp = (0,_newNode_js__WEBPACK_IMPORTED_MODULE_0__.newNode)(value, null);\r\n            _tail.nextNode = tmp;\r\n            _tail = tmp;\r\n            _size++;\r\n            return 'successfully inserted';\r\n        }\r\n        else {\r\n            let before = _head\r\n            let nxt = _head;\r\n            for(let i = 0; i < _size; i++) {\r\n                if(i == index){\r\n                    let tmp = (0,_newNode_js__WEBPACK_IMPORTED_MODULE_0__.newNode)(value,before);\r\n                    nxt.nextNode = tmp;\r\n                    _size++;\r\n                    return 'successfully inserted';\r\n                }\r\n                nxt = before;\r\n                before = nxt.nextNode;\r\n            }\r\n        }\r\n    }\r\n    function removeAt(index){\r\n        if(index == 0){\r\n            let tmp = _head.nextNode;\r\n            _head = tmp;\r\n            _size--;\r\n            return 'successfully removed';\r\n        }\r\n        else if (index >= _size) {\r\n            return 'Index out of range';\r\n        }\r\n        else {\r\n            let before = _head\r\n            let nxt = _head;\r\n            for(let i = 0; i < _size; i++) {\r\n                if(i == index){\r\n                    let tmp = before.nextNode;\r\n                    nxt.nextNode = tmp;\r\n                    _size--;\r\n                    return 'successfully removed';\r\n                }\r\n                else {    \r\n                    nxt = before;\r\n                    before = nxt.nextNode;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    \r\n\r\n    return {append, prepend, size, head, tail, at, pop, contains, find, toString, insertAt, removeAt};\r\n}\n\n//# sourceURL=webpack://odin-linkedlists/./src/LinkedList.js?");

/***/ }),

/***/ "./src/newNode.js":
/*!************************!*\
  !*** ./src/newNode.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newNode\": () => (/* binding */ newNode)\n/* harmony export */ });\n\r\nconst newNode = (value, nextNode) => {\r\n        return {value, nextNode};\r\n};\n\n//# sourceURL=webpack://odin-linkedlists/./src/newNode.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/LinkedList.js");
/******/ 	
/******/ })()
;