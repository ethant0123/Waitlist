"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n// App/page.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Adjust the path if needed\nfunction Page() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setError(\"\");\n        setSuccess(false);\n        try {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.firestore, \"waitlist\"), {\n                email\n            });\n            setSuccess(true);\n            setEmail(\"\");\n        } catch (err) {\n            setError(\"Failed to save email. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-purple-600 text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"flex flex-col items-center justify-center flex-grow text-center p-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-5xl font-bold mb-4 leading-tight\",\n                        children: \"Join the Exclusive Waitlist for Our Exciting New App!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg mb-8\",\n                        children: \"Be the first to experience the future of connecting with like-minded professionals.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"w-full max-w-md mx-auto space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                placeholder: \"Enter your email\",\n                                required: true,\n                                className: \"w-full px-4 py-2 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition duration-300\",\n                                children: \"Join Waitlist\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    success && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-4 text-green-300\",\n                        children: \"Thank you for joining the waitlist!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, this),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-4 text-red-300\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                        lineNumber: 50,\n                        columnNumber: 19\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"bg-white text-gray-800 py-16 px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-bold mb-4\",\n                                    children: \"Create\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600\",\n                                    children: \"Create custom profile displaying your skills and interests.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-bold mb-4\",\n                                    children: \"Explore\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600\",\n                                    children: \"Swipe on other users' profiles to match with the perfect teammate/partner.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-gray-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-bold mb-4\",\n                                    children: \"Connect\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600\",\n                                    children: \"Message and interect with real people with similar interests.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-gray-800 text-white py-4 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"\\xa9 2024 SyncUp. All rights reserved.\"\n                }, void 0, false, {\n                    fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ethanthomas/Headstarter/Waitlist/app/page.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"x4YJrsEtQlY7gKp3TqTxLPJg3Bo=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGNBQWM7OztBQUdtQjtBQUN1QjtBQUNqQixDQUFDLDRCQUE0QjtBQUVyRCxTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVcsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQkgsU0FBUztRQUNURixXQUFXO1FBRVgsSUFBSTtZQUNGLE1BQU1OLDBEQUFNQSxDQUFDRCw4REFBVUEsQ0FBQ0UsZ0RBQVNBLEVBQUUsYUFBYTtnQkFBRUU7WUFBTTtZQUN4REcsV0FBVztZQUNYRixTQUFTO1FBQ1gsRUFBRSxPQUFPUSxLQUFLO1lBQ1pKLFNBQVM7UUFDWDtJQUNGO0lBRUEscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDQztnQkFBUUQsV0FBVTs7a0NBQ2pCLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBd0M7Ozs7OztrQ0FDdEQsOERBQUNHO3dCQUFFSCxXQUFVO2tDQUFlOzs7Ozs7a0NBQzVCLDhEQUFDSTt3QkFBS0MsVUFBVVY7d0JBQWNLLFdBQVU7OzBDQUN0Qyw4REFBQ007Z0NBQ0NDLE1BQUs7Z0NBQ0xDLE9BQU9uQjtnQ0FDUG9CLFVBQVUsQ0FBQ2IsSUFBTU4sU0FBU00sRUFBRWMsTUFBTSxDQUFDRixLQUFLO2dDQUN4Q0csYUFBWTtnQ0FDWkMsUUFBUTtnQ0FDUlosV0FBVTs7Ozs7OzBDQUVaLDhEQUFDYTtnQ0FDQ04sTUFBSztnQ0FDTFAsV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7O29CQUlGVCx5QkFBVyw4REFBQ1k7d0JBQUVILFdBQVU7a0NBQXNCOzs7Ozs7b0JBQzlDUCx1QkFBUyw4REFBQ1U7d0JBQUVILFdBQVU7a0NBQXFCUDs7Ozs7Ozs7Ozs7OzBCQUk5Qyw4REFBQ1E7Z0JBQVFELFdBQVU7MEJBQ2pCLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2M7b0NBQUdkLFdBQVU7OENBQXlCOzs7Ozs7OENBQ3ZDLDhEQUFDRztvQ0FBRUgsV0FBVTs4Q0FBZ0I7Ozs7Ozs7Ozs7OztzQ0FFL0IsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2M7b0NBQUdkLFdBQVU7OENBQXlCOzs7Ozs7OENBQ3ZDLDhEQUFDRztvQ0FBRUgsV0FBVTs4Q0FBZ0I7Ozs7Ozs7Ozs7OztzQ0FFL0IsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2M7b0NBQUdkLFdBQVU7OENBQXlCOzs7Ozs7OENBQ3ZDLDhEQUFDRztvQ0FBRUgsV0FBVTs4Q0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1uQyw4REFBQ2U7Z0JBQU9mLFdBQVU7MEJBQ2hCLDRFQUFDRzs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtHQXRFd0JmO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQXBwL3BhZ2UuanNcbid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZmlyZXN0b3JlIH0gZnJvbSAnQC9maXJlYmFzZSc7IC8vIEFkanVzdCB0aGUgcGF0aCBpZiBuZWVkZWRcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0RXJyb3IoJycpO1xuICAgIHNldFN1Y2Nlc3MoZmFsc2UpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGZpcmVzdG9yZSwgJ3dhaXRsaXN0JyksIHsgZW1haWwgfSk7XG4gICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgc2V0RW1haWwoJycpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBzYXZlIGVtYWlsLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggZmxleC1jb2wgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAwIHRvLXB1cnBsZS02MDAgdGV4dC13aGl0ZVwiPlxuICAgICAgey8qIEhlcm8gU2VjdGlvbiAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZsZXgtZ3JvdyB0ZXh0LWNlbnRlciBwLThcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIGZvbnQtYm9sZCBtYi00IGxlYWRpbmctdGlnaHRcIj5Kb2luIHRoZSBFeGNsdXNpdmUgV2FpdGxpc3QgZm9yIE91ciBFeGNpdGluZyBOZXcgQXBwITwvaDE+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgbWItOFwiPkJlIHRoZSBmaXJzdCB0byBleHBlcmllbmNlIHRoZSBmdXR1cmUgb2YgY29ubmVjdGluZyB3aXRoIGxpa2UtbWluZGVkIHByb2Zlc3Npb25hbHMuPC9wPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXctbWQgbXgtYXV0byBzcGFjZS15LTRcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMiBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluZGlnby00MDBcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWQtbGcgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEpvaW4gV2FpdGxpc3RcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICB7c3VjY2VzcyAmJiA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQtZ3JlZW4tMzAwXCI+VGhhbmsgeW91IGZvciBqb2luaW5nIHRoZSB3YWl0bGlzdCE8L3A+fVxuICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LXJlZC0zMDBcIj57ZXJyb3J9PC9wPn1cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIEZlYXR1cmVzIFNlY3Rpb24gKi99XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LWdyYXktODAwIHB5LTE2IHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0zIGdhcC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbGcgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj5DcmVhdGU8L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPkNyZWF0ZSBjdXN0b20gcHJvZmlsZSBkaXNwbGF5aW5nIHlvdXIgc2tpbGxzIGFuZCBpbnRlcmVzdHMuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgcC02IHJvdW5kZWQtbGcgc2hhZG93LWxnIHRyYW5zaXRpb24tdHJhbnNmb3JtIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+RXhwbG9yZTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+U3dpcGUgb24gb3RoZXIgdXNlcnMnIHByb2ZpbGVzIHRvIG1hdGNoIHdpdGggdGhlIHBlcmZlY3QgdGVhbW1hdGUvcGFydG5lci48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbGcgdHJhbnNpdGlvbi10cmFuc2Zvcm0gdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj5Db25uZWN0PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5NZXNzYWdlIGFuZCBpbnRlcmVjdCB3aXRoIHJlYWwgcGVvcGxlIHdpdGggc2ltaWxhciBpbnRlcmVzdHMuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIEZvb3RlciAqL31cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgdGV4dC13aGl0ZSBweS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxwPiZjb3B5OyAyMDI0IFN5bmNVcC4gQWxsIHJpZ2h0cyByZXNlcnZlZC48L3A+XG4gICAgICAgIHsvKiA8cD5Gb2xsb3cgdXMgb24gPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby00MDBcIj5Tb2NpYWwgTWVkaWE8L2E+PC9wPiAqL31cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY29sbGVjdGlvbiIsImFkZERvYyIsImZpcmVzdG9yZSIsIlBhZ2UiLCJlbWFpbCIsInNldEVtYWlsIiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImgxIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIiwiaDIiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});