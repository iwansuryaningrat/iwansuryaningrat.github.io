"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.js":
/*!********************************!*\
  !*** ./src/pages/_document.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styletron-react */ \"styletron-react\");\n/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styletron_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styletron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styletron */ \"./src/styletron.js\");\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(context) {\n        const renderPage = ()=>context.renderPage({\n                enhanceApp: (App)=>(props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styletron_react__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n                            value: _styletron__WEBPACK_IMPORTED_MODULE_3__.styletron,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                                ...props\n                            }, void 0, false, {\n                                fileName: \"F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js\",\n                                lineNumber: 12,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js\",\n                            lineNumber: 11,\n                            columnNumber: 13\n                        }, this)\n            });\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps({\n            ...context,\n            renderPage\n        });\n        // Extract the stylesheets from Styletron\n        const stylesheets = _styletron__WEBPACK_IMPORTED_MODULE_3__.styletron.getStylesheets() || [];\n        return {\n            ...initialProps,\n            stylesheets\n        };\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: \"en\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: this.props.stylesheets.map((sheet, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                            className: \"_styletron_hydrate_\",\n                            dangerouslySetInnerHTML: {\n                                __html: sheet.css\n                            },\n                            media: sheet.attrs.media,\n                            \"data-hydrate\": sheet.attrs[\"data-hydrate\"]\n                        }, i, false, {\n                            fileName: \"F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RTtBQUNQO0FBQ3ZCO0FBRXpDLE1BQU1RLG1CQUFtQlIsc0RBQVFBO0lBQy9CLGFBQWFTLGdCQUFnQkMsT0FBTyxFQUFFO1FBQ3BDLE1BQU1DLGFBQWEsSUFDakJELFFBQVFDLFVBQVUsQ0FBQztnQkFDakJDLFlBQVksQ0FBQ0MsTUFBUSxDQUFDQyxzQkFFbEIsOERBQUNSLHFEQUFpQkE7NEJBQUNTLE9BQU9SLGlEQUFTQTtzQ0FDakMsNEVBQUNNO2dDQUFLLEdBQUdDLEtBQUs7Ozs7Ozs7Ozs7O1lBR3RCO1FBRUYsTUFBTUUsZUFBZSxNQUFNaEIsb0VBQXdCLENBQUM7WUFDbEQsR0FBR1UsT0FBTztZQUNWQztRQUNGO1FBRUEseUNBQXlDO1FBQ3pDLE1BQU1NLGNBQWNWLGlEQUFTQSxDQUFDVyxjQUFjLE1BQU0sRUFBRTtRQUVwRCxPQUFPO1lBQUUsR0FBR0YsWUFBWTtZQUFFQztRQUFZO0lBQ3hDO0lBRUFFLFNBQVM7UUFDUCxxQkFDRSw4REFBQ2xCLCtDQUFJQTtZQUFDbUIsTUFBSzs7OEJBQ1QsOERBQUNsQiwrQ0FBSUE7OEJBQ0YsSUFBSSxDQUFDWSxLQUFLLENBQUNHLFdBQVcsQ0FBQ0ksR0FBRyxDQUFDLENBQUNDLE9BQU9DLGtCQUNsQyw4REFBQ0M7NEJBQ0NDLFdBQVU7NEJBQ1ZDLHlCQUF5QjtnQ0FBRUMsUUFBUUwsTUFBTU0sR0FBRzs0QkFBQzs0QkFDN0NDLE9BQU9QLE1BQU1RLEtBQUssQ0FBQ0QsS0FBSzs0QkFDeEJFLGdCQUFjVCxNQUFNUSxLQUFLLENBQUMsZUFBZTsyQkFDcENQOzs7Ozs7Ozs7OzhCQUlYLDhEQUFDUzs7c0NBQ0MsOERBQUM3QiwrQ0FBSUE7Ozs7O3NDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSW5CO0FBQ0Y7QUFFQSxpRUFBZUksVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9wYWdlcy9fZG9jdW1lbnQuanM/YzUwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIGFzIFN0eWxldHJvblByb3ZpZGVyIH0gZnJvbSBcInN0eWxldHJvbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyBzdHlsZXRyb24gfSBmcm9tIFwiLi4vc3R5bGV0cm9uXCI7XHJcblxyXG5jbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY29udGV4dCkge1xyXG4gICAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+XHJcbiAgICAgIGNvbnRleHQucmVuZGVyUGFnZSh7XHJcbiAgICAgICAgZW5oYW5jZUFwcDogKEFwcCkgPT4gKHByb3BzKSA9PlxyXG4gICAgICAgICAgKFxyXG4gICAgICAgICAgICA8U3R5bGV0cm9uUHJvdmlkZXIgdmFsdWU9e3N0eWxldHJvbn0+XHJcbiAgICAgICAgICAgICAgPEFwcCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvU3R5bGV0cm9uUHJvdmlkZXI+XHJcbiAgICAgICAgICApLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoe1xyXG4gICAgICAuLi5jb250ZXh0LFxyXG4gICAgICByZW5kZXJQYWdlLFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIC8vIEV4dHJhY3QgdGhlIHN0eWxlc2hlZXRzIGZyb20gU3R5bGV0cm9uXHJcbiAgICBjb25zdCBzdHlsZXNoZWV0cyA9IHN0eWxldHJvbi5nZXRTdHlsZXNoZWV0cygpIHx8IFtdO1xyXG5cclxuICAgIHJldHVybiB7IC4uLmluaXRpYWxQcm9wcywgc3R5bGVzaGVldHMgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxIdG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuc3R5bGVzaGVldHMubWFwKChzaGVldCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8c3R5bGVcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJfc3R5bGV0cm9uX2h5ZHJhdGVfXCJcclxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNoZWV0LmNzcyB9fVxyXG4gICAgICAgICAgICAgIG1lZGlhPXtzaGVldC5hdHRycy5tZWRpYX1cclxuICAgICAgICAgICAgICBkYXRhLWh5ZHJhdGU9e3NoZWV0LmF0dHJzW1wiZGF0YS1oeWRyYXRlXCJdfVxyXG4gICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Ym9keT5cclxuICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgPC9IdG1sPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQ7XHJcbiJdLCJuYW1lcyI6WyJEb2N1bWVudCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJQcm92aWRlciIsIlN0eWxldHJvblByb3ZpZGVyIiwic3R5bGV0cm9uIiwiTXlEb2N1bWVudCIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJyZW5kZXJQYWdlIiwiZW5oYW5jZUFwcCIsIkFwcCIsInByb3BzIiwidmFsdWUiLCJpbml0aWFsUHJvcHMiLCJzdHlsZXNoZWV0cyIsImdldFN0eWxlc2hlZXRzIiwicmVuZGVyIiwibGFuZyIsIm1hcCIsInNoZWV0IiwiaSIsInN0eWxlIiwiY2xhc3NOYW1lIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjc3MiLCJtZWRpYSIsImF0dHJzIiwiZGF0YS1oeWRyYXRlIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_document.js\n");

/***/ }),

/***/ "./src/styletron.js":
/*!**************************!*\
  !*** ./src/styletron.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isServer: () => (/* binding */ isServer),\n/* harmony export */   styletron: () => (/* binding */ styletron)\n/* harmony export */ });\n/* harmony import */ var styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styletron-engine-atomic */ \"styletron-engine-atomic\");\n/* harmony import */ var styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst isServer = \"undefined\" === \"undefined\";\nconst styletron = isServer ? new styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__.Server() : new styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__.Client();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGV0cm9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0U7QUFDQTtBQUU3RCxNQUFNSSxXQUFXLGdCQUFrQixZQUFZO0FBRS9DLE1BQU1DLFlBQVlELFdBQ3JCLElBQUlELDJEQUFlQSxLQUNuQixJQUFJRiwyREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZXRyb24uanM/ZTYxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgYXMgU3R5bGV0cm9uQ2xpZW50IH0gZnJvbSBcInN0eWxldHJvbi1lbmdpbmUtYXRvbWljXCI7XHJcbmltcG9ydCB7IFNlcnZlciBhcyBTdHlsZXRyb25TZXJ2ZXIgfSBmcm9tIFwic3R5bGV0cm9uLWVuZ2luZS1hdG9taWNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3R5bGV0cm9uID0gaXNTZXJ2ZXJcclxuICA/IG5ldyBTdHlsZXRyb25TZXJ2ZXIoKVxyXG4gIDogbmV3IFN0eWxldHJvbkNsaWVudCgpO1xyXG4iXSwibmFtZXMiOlsiQ2xpZW50IiwiU3R5bGV0cm9uQ2xpZW50IiwiU2VydmVyIiwiU3R5bGV0cm9uU2VydmVyIiwiaXNTZXJ2ZXIiLCJzdHlsZXRyb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styletron.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styletron-engine-atomic":
/*!******************************************!*\
  !*** external "styletron-engine-atomic" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("styletron-engine-atomic");

/***/ }),

/***/ "styletron-react":
/*!**********************************!*\
  !*** external "styletron-react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("styletron-react");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_document.js")));
module.exports = __webpack_exports__;

})();