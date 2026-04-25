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
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styletron-react */ "styletron-react");\n/* harmony import */ var styletron_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styletron_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styletron__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styletron */ "./src/styletron.js");\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(context) {\n        const renderPage = ()=>context.renderPage({\n                enhanceApp: (App)=>(props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styletron_react__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n                            value: _styletron__WEBPACK_IMPORTED_MODULE_3__.styletron,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                                ...props\n                            }, void 0, false, {\n                                fileName: "F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: "F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        }, this)\n            });\n        const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps({\n            ...context,\n            renderPage\n        });\n        // Extract the stylesheets from Styletron\n        const stylesheets = _styletron__WEBPACK_IMPORTED_MODULE_3__.styletron.getStylesheets() || [];\n        return {\n            ...initialProps,\n            stylesheets\n        };\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            lang: "en",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: this.props.stylesheets.map((sheet, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("style", {\n                            className: "_styletron_hydrate_",\n                            dangerouslySetInnerHTML: {\n                                __html: sheet.css\n                            },\n                            media: sheet.attrs.media,\n                            "data-hydrate": sheet.attrs["data-hydrate"]\n                        }, i, false, {\n                            fileName: "F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: "F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: "F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: "F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: "F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: "F:\\\\Portfolio\\\\iwansuryaningrat.github.io\\\\src\\\\pages\\\\_document.js",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1RTtBQUNQO0FBQ3ZCO0FBRXpDLE1BQU1RLG1CQUFtQlIsc0RBQVFBO0lBQy9CLGFBQWFTLGdCQUFnQkMsT0FBTyxFQUFFO1FBQ3BDLE1BQU1DLGFBQWEsSUFDakJELFFBQVFDLFVBQVUsQ0FBQztnQkFDakJDLFlBQVksQ0FBQ0MsTUFBUSxDQUFDQyxzQkFDcEIsOERBQUNSLHFEQUFpQkE7NEJBQUNTLE9BQU9SLGlEQUFTQTtzQ0FDakMsNEVBQUNNO2dDQUFLLEdBQUdDLEtBQUs7Ozs7Ozs7Ozs7O1lBR3BCO1FBRUYsTUFBTUUsZUFBZSxNQUFNaEIsb0VBQXdCLENBQUM7WUFDbEQsR0FBR1UsT0FBTztZQUNWQztRQUNGO1FBRUEseUNBQXlDO1FBQ3pDLE1BQU1NLGNBQWNWLGlEQUFTQSxDQUFDVyxjQUFjLE1BQU0sRUFBRTtRQUVwRCxPQUFPO1lBQUUsR0FBR0YsWUFBWTtZQUFFQztRQUFZO0lBQ3hDO0lBRUFFLFNBQVM7UUFDUCxxQkFDRSw4REFBQ2xCLCtDQUFJQTtZQUFDbUIsTUFBSzs7OEJBQ1QsOERBQUNsQiwrQ0FBSUE7OEJBQ0YsSUFBSSxDQUFDWSxLQUFLLENBQUNHLFdBQVcsQ0FBQ0ksR0FBRyxDQUFDLENBQUNDLE9BQU9DLGtCQUNsQyw4REFBQ0M7NEJBQ0NDLFdBQVU7NEJBQ1ZDLHlCQUF5QjtnQ0FBRUMsUUFBUUwsTUFBTU0sR0FBRzs0QkFBQzs0QkFDN0NDLE9BQU9QLE1BQU1RLEtBQUssQ0FBQ0QsS0FBSzs0QkFDeEJFLGdCQUFjVCxNQUFNUSxLQUFLLENBQUMsZUFBZTsyQkFDcENQOzs7Ozs7Ozs7OzhCQUlYLDhEQUFDUzs7c0NBQ0MsOERBQUM3QiwrQ0FBSUE7Ozs7O3NDQUNMLDhEQUFDQyxxREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSW5CO0FBQ0Y7QUFFQSxpRUFBZUksVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9wYWdlcy9fZG9jdW1lbnQuanM/YzUwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XG5pbXBvcnQgeyBQcm92aWRlciBhcyBTdHlsZXRyb25Qcm92aWRlciB9IGZyb20gXCJzdHlsZXRyb24tcmVhY3RcIjtcbmltcG9ydCB7IHN0eWxldHJvbiB9IGZyb20gXCIuLi9zdHlsZXRyb25cIjtcblxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+XG4gICAgICBjb250ZXh0LnJlbmRlclBhZ2Uoe1xuICAgICAgICBlbmhhbmNlQXBwOiAoQXBwKSA9PiAocHJvcHMpID0+IChcbiAgICAgICAgICA8U3R5bGV0cm9uUHJvdmlkZXIgdmFsdWU9e3N0eWxldHJvbn0+XG4gICAgICAgICAgICA8QXBwIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICA8L1N0eWxldHJvblByb3ZpZGVyPlxuICAgICAgICApLFxuICAgICAgfSk7XG5cbiAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoe1xuICAgICAgLi4uY29udGV4dCxcbiAgICAgIHJlbmRlclBhZ2UsXG4gICAgfSk7XG5cbiAgICAvLyBFeHRyYWN0IHRoZSBzdHlsZXNoZWV0cyBmcm9tIFN0eWxldHJvblxuICAgIGNvbnN0IHN0eWxlc2hlZXRzID0gc3R5bGV0cm9uLmdldFN0eWxlc2hlZXRzKCkgfHwgW107XG5cbiAgICByZXR1cm4geyAuLi5pbml0aWFsUHJvcHMsIHN0eWxlc2hlZXRzIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxIdG1sIGxhbmc9XCJlblwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5zdHlsZXNoZWV0cy5tYXAoKHNoZWV0LCBpKSA9PiAoXG4gICAgICAgICAgICA8c3R5bGVcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiX3N0eWxldHJvbl9oeWRyYXRlX1wiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2hlZXQuY3NzIH19XG4gICAgICAgICAgICAgIG1lZGlhPXtzaGVldC5hdHRycy5tZWRpYX1cbiAgICAgICAgICAgICAgZGF0YS1oeWRyYXRlPXtzaGVldC5hdHRyc1tcImRhdGEtaHlkcmF0ZVwiXX1cbiAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Ym9keT5cbiAgICAgICAgICA8TWFpbiAvPlxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XG4gICAgICAgIDwvYm9keT5cbiAgICAgIDwvSHRtbD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQ7XG4iXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiUHJvdmlkZXIiLCJTdHlsZXRyb25Qcm92aWRlciIsInN0eWxldHJvbiIsIk15RG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicmVuZGVyUGFnZSIsImVuaGFuY2VBcHAiLCJBcHAiLCJwcm9wcyIsInZhbHVlIiwiaW5pdGlhbFByb3BzIiwic3R5bGVzaGVldHMiLCJnZXRTdHlsZXNoZWV0cyIsInJlbmRlciIsImxhbmciLCJtYXAiLCJzaGVldCIsImkiLCJzdHlsZSIsImNsYXNzTmFtZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY3NzIiwibWVkaWEiLCJhdHRycyIsImRhdGEtaHlkcmF0ZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_document.js\n'
        );

        /***/
      },

    /***/ "./src/styletron.js":
      /*!**************************!*\
  !*** ./src/styletron.js ***!
  \**************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isServer: () => (/* binding */ isServer),\n/* harmony export */   styletron: () => (/* binding */ styletron)\n/* harmony export */ });\n/* harmony import */ var styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styletron-engine-atomic */ "styletron-engine-atomic");\n/* harmony import */ var styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst isServer = "undefined" === "undefined";\nconst styletron = isServer ? new styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__.Server() : new styletron_engine_atomic__WEBPACK_IMPORTED_MODULE_0__.Client();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGV0cm9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0U7QUFDQTtBQUU3RCxNQUFNSSxXQUFXLGdCQUFrQixZQUFZO0FBRS9DLE1BQU1DLFlBQVlELFdBQ3JCLElBQUlELDJEQUFlQSxLQUNuQixJQUFJRiwyREFBZUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL3NyYy9zdHlsZXRyb24uanM/ZTYxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgYXMgU3R5bGV0cm9uQ2xpZW50IH0gZnJvbSBcInN0eWxldHJvbi1lbmdpbmUtYXRvbWljXCI7XG5pbXBvcnQgeyBTZXJ2ZXIgYXMgU3R5bGV0cm9uU2VydmVyIH0gZnJvbSBcInN0eWxldHJvbi1lbmdpbmUtYXRvbWljXCI7XG5cbmV4cG9ydCBjb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXRyb24gPSBpc1NlcnZlclxuICA/IG5ldyBTdHlsZXRyb25TZXJ2ZXIoKVxuICA6IG5ldyBTdHlsZXRyb25DbGllbnQoKTtcbiJdLCJuYW1lcyI6WyJDbGllbnQiLCJTdHlsZXRyb25DbGllbnQiLCJTZXJ2ZXIiLCJTdHlsZXRyb25TZXJ2ZXIiLCJpc1NlcnZlciIsInN0eWxldHJvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styletron.js\n'
        );

        /***/
      },

    /***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
      /*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
      /***/ (module) => {
        module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /***/ (module) => {
        module.exports = require("react");

        /***/
      },

    /***/ "react/jsx-dev-runtime":
      /*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
      /***/ (module) => {
        module.exports = require("react/jsx-dev-runtime");

        /***/
      },

    /***/ "react/jsx-runtime":
      /*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
      /***/ (module) => {
        module.exports = require("react/jsx-runtime");

        /***/
      },

    /***/ "styletron-engine-atomic":
      /*!******************************************!*\
  !*** external "styletron-engine-atomic" ***!
  \******************************************/
      /***/ (module) => {
        module.exports = require("styletron-engine-atomic");

        /***/
      },

    /***/ "styletron-react":
      /*!**********************************!*\
  !*** external "styletron-react" ***!
  \**********************************/
      /***/ (module) => {
        module.exports = require("styletron-react");

        /***/
      },

    /***/ path:
      /*!***********************!*\
  !*** external "path" ***!
  \***********************/
      /***/ (module) => {
        module.exports = require("path");

        /***/
      },
  };
  // load runtime
  var __webpack_require__ = require("../webpack-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(
    0,
    ["vendor-chunks/next", "vendor-chunks/@swc"],
    () => __webpack_exec__("./src/pages/_document.js")
  );
  module.exports = __webpack_exports__;
})();
