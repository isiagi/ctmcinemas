"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"8652bc565f33\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVjYW4vRG9jdW1lbnRzL3Byb2dyYW1taW5nIGdpZ3MvZ2VvZnJleS9jdG1jaW5lbWFzL2FwcC9nbG9iYWxzLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjg2NTJiYzU2NWYzM1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Navbar.tsx":
/*!*******************************!*\
  !*** ./components/Navbar.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/client/app-dir/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Film_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Film,Menu,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/film.js\");\n/* harmony import */ var _barrel_optimize_names_Film_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Film,Menu,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _barrel_optimize_names_Film_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Film,Menu,X!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _MovieSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MovieSearch */ \"(app-pages-browser)/./components/MovieSearch.tsx\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Navbar() {\n    _s();\n    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { isSignedIn, user } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_5__.useUser)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Navbar.useEffect\": ()=>{\n            const handleScroll = {\n                \"Navbar.useEffect.handleScroll\": ()=>{\n                    // Get banner height (400px) plus any additional spacing\n                    const bannerHeight = 400;\n                    setIsScrolled(window.scrollY > bannerHeight);\n                }\n            }[\"Navbar.useEffect.handleScroll\"];\n            window.addEventListener(\"scroll\", handleScroll);\n            return ({\n                \"Navbar.useEffect\": ()=>window.removeEventListener(\"scroll\", handleScroll)\n            })[\"Navbar.useEffect\"];\n        }\n    }[\"Navbar.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"w-full transition-all duration-300 \".concat(isScrolled ? \"fixed top-0 bg-gray-800 shadow-lg z-50\" : \"bg-gray-800\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between h-16\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/\",\n                                    className: \"flex-shrink-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Film_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        className: \"h-8 w-8 text-white\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"hidden md:block\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"ml-10 flex items-baseline space-x-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/whatson\",\n                                                className: \"text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium\",\n                                                children: \"What's On\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/comingsoon\",\n                                                className: \"text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium\",\n                                                children: \"Coming Soon\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                                lineNumber: 46,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/eats\",\n                                                className: \"text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium\",\n                                                children: \"Eats\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"hidden md:flex items-center space-x-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieSearch__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                isSignedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_5__.UserButton, {\n                                    afterSignOutUrl: \"/\"\n                                }, void 0, false, {\n                                    fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    variant: \"outline\",\n                                    size: \"sm\",\n                                    className: \"text-white border-white hover:bg-white hover:text-gray-800\",\n                                    children: \"Sign In\"\n                                }, void 0, false, {\n                                    fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"-mr-2 flex md:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),\n                                className: \"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"sr-only\",\n                                        children: \"Open main menu\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, this),\n                                    isMobileMenuOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Film_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        className: \"block h-6 w-6\",\n                                        \"aria-hidden\": \"true\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Film_Menu_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        className: \"block h-6 w-6\",\n                                        \"aria-hidden\": \"true\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            isMobileMenuOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-2 pt-2 pb-3 space-y-1 sm:px-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/whatson\",\n                                className: \"text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium\",\n                                children: \"What's On\"\n                            }, void 0, false, {\n                                fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/comingsoon\",\n                                className: \"text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium\",\n                                children: \"Coming Soon\"\n                            }, void 0, false, {\n                                fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/eats\",\n                                className: \"text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium\",\n                                children: \"Eats\"\n                            }, void 0, false, {\n                                fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"pt-4 pb-3 border-t border-gray-700\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"px-2 space-y-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MovieSearch__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/Navbar.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"aqdLlKPB3eXw2yGhadUokUCtdQo=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_5__.useUser\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU0QztBQUNmO0FBQ2dCO0FBQ0c7QUFDUjtBQUMwQjtBQUVuRCxTQUFTVTs7SUFDdEIsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNhLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxFQUFFZSxVQUFVLEVBQUVDLElBQUksRUFBRSxHQUFHUCxzREFBT0E7SUFFcENSLGdEQUFTQTs0QkFBQztZQUNSLE1BQU1nQjtpREFBZTtvQkFDbkIsd0RBQXdEO29CQUN4RCxNQUFNQyxlQUFlO29CQUNyQkosY0FBY0ssT0FBT0MsT0FBTyxHQUFHRjtnQkFDakM7O1lBRUFDLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVKO1lBQ2xDO29DQUFPLElBQU1FLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVMOztRQUNwRDsyQkFBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNNO1FBQ0NDLFdBQVcsc0NBRVYsT0FEQ1gsYUFBYSwyQ0FBMkM7OzBCQUcxRCw4REFBQ1k7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDdEIsa0RBQUlBO29DQUFDd0IsTUFBSztvQ0FBSUYsV0FBVTs4Q0FDdkIsNEVBQUNyQix1RkFBSUE7d0NBQUNxQixXQUFVOzs7Ozs7Ozs7Ozs4Q0FFbEIsOERBQUNDO29DQUFJRCxXQUFVOzhDQUNiLDRFQUFDQzt3Q0FBSUQsV0FBVTs7MERBQ2IsOERBQUN0QixrREFBSUE7Z0RBQ0h3QixNQUFLO2dEQUNMRixXQUFVOzBEQUNYOzs7Ozs7MERBR0QsOERBQUN0QixrREFBSUE7Z0RBQ0h3QixNQUFLO2dEQUNMRixXQUFVOzBEQUNYOzs7Ozs7MERBR0QsOERBQUN0QixrREFBSUE7Z0RBQ0h3QixNQUFLO2dEQUNMRixXQUFVOzBEQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FNUCw4REFBQ0M7NEJBQUlELFdBQVU7OzhDQUNiLDhEQUFDakIsb0RBQVdBOzs7OztnQ0FDWFEsMkJBQ0MsOERBQUNQLHFEQUFVQTtvQ0FBQ21CLGlCQUFnQjs7Ozs7eURBRTVCLDhEQUFDckIseURBQU1BO29DQUFDc0IsU0FBUTtvQ0FBVUMsTUFBSztvQ0FBS0wsV0FBVTs4Q0FBNkQ7Ozs7Ozs7Ozs7OztzQ0FLL0csOERBQUNDOzRCQUFJRCxXQUFVO3NDQUNiLDRFQUFDbEIseURBQU1BO2dDQUNMd0IsU0FBUyxJQUFNbEIsb0JBQW9CLENBQUNEO2dDQUNwQ2EsV0FBVTs7a0RBRVYsOERBQUNPO3dDQUFLUCxXQUFVO2tEQUFVOzs7Ozs7b0NBQ3pCYixpQ0FDQyw4REFBQ04sdUZBQUNBO3dDQUFDbUIsV0FBVTt3Q0FBZ0JRLGVBQVk7Ozs7OzZEQUV6Qyw4REFBQzVCLHVGQUFJQTt3Q0FBQ29CLFdBQVU7d0NBQWdCUSxlQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT3JEckIsa0NBQ0MsOERBQUNjO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDdEIsa0RBQUlBO2dDQUNId0IsTUFBSztnQ0FDTEYsV0FBVTswQ0FDWDs7Ozs7OzBDQUdELDhEQUFDdEIsa0RBQUlBO2dDQUNId0IsTUFBSztnQ0FDTEYsV0FBVTswQ0FDWDs7Ozs7OzBDQUdELDhEQUFDdEIsa0RBQUlBO2dDQUNId0IsTUFBSztnQ0FDTEYsV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7O2tDQUlILDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQUlELFdBQVU7c0NBQ2IsNEVBQUNqQixvREFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCMUI7R0E5SHdCRzs7UUFHT0Qsa0RBQU9BOzs7S0FIZEMiLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVjYW4vRG9jdW1lbnRzL3Byb2dyYW1taW5nIGdpZ3MvZ2VvZnJleS9jdG1jaW5lbWFzL2NvbXBvbmVudHMvTmF2YmFyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRmlsbSwgTWVudSwgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgTW92aWVTZWFyY2ggZnJvbSBcIi4vTW92aWVTZWFyY2hcIjtcbmltcG9ydCB7IFVzZXJCdXR0b24sIFNpZ25JbkJ1dHRvbiwgdXNlVXNlciB9IGZyb20gXCJAY2xlcmsvbmV4dGpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgW2lzTW9iaWxlTWVudU9wZW4sIHNldElzTW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTY3JvbGxlZCwgc2V0SXNTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgaXNTaWduZWRJbiwgdXNlciB9ID0gdXNlVXNlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgLy8gR2V0IGJhbm5lciBoZWlnaHQgKDQwMHB4KSBwbHVzIGFueSBhZGRpdGlvbmFsIHNwYWNpbmdcbiAgICAgIGNvbnN0IGJhbm5lckhlaWdodCA9IDQwMDtcbiAgICAgIHNldElzU2Nyb2xsZWQod2luZG93LnNjcm9sbFkgPiBiYW5uZXJIZWlnaHQpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2XG4gICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7XG4gICAgICAgIGlzU2Nyb2xsZWQgPyBcImZpeGVkIHRvcC0wIGJnLWdyYXktODAwIHNoYWRvdy1sZyB6LTUwXCIgOiBcImJnLWdyYXktODAwXCJcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gcHgtNCBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxuICAgICAgICAgICAgICA8RmlsbSBjbGFzc05hbWU9XCJoLTggdy04IHRleHQtd2hpdGVcIiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2tcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xMCBmbGV4IGl0ZW1zLWJhc2VsaW5lIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL3doYXRzb25cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTcwMCBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBXaGF0J3MgT25cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY29taW5nc29vblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktNzAwIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvbWluZyBTb29uXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2VhdHNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTcwMCBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBFYXRzXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgPE1vdmllU2VhcmNoIC8+XG4gICAgICAgICAgICB7aXNTaWduZWRJbiA/IChcbiAgICAgICAgICAgICAgPFVzZXJCdXR0b24gYWZ0ZXJTaWduT3V0VXJsPVwiL1wiIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cInNtXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBib3JkZXItd2hpdGUgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW1yLTIgZmxleCBtZDpoaWRkZW5cIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNb2JpbGVNZW51T3BlbighaXNNb2JpbGVNZW51T3Blbil9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTIgcm91bmRlZC1tZCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6YmctZ3JheS03MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktODAwIGZvY3VzOnJpbmctd2hpdGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgIHtpc01vYmlsZU1lbnVPcGVuID8gKFxuICAgICAgICAgICAgICAgIDxYIGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxNZW51IGNsYXNzTmFtZT1cImJsb2NrIGgtNiB3LTZcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtpc01vYmlsZU1lbnVPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHQtMiBwYi0zIHNwYWNlLXktMSBzbTpweC0zXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPVwiL3doYXRzb25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyYXktNzAwIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFdoYXQncyBPblxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi9jb21pbmdzb29uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTcwMCBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb21pbmcgU29vblxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgaHJlZj1cIi9lYXRzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBob3ZlcjpiZy1ncmF5LTcwMCBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBFYXRzXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IHBiLTMgYm9yZGVyLXQgYm9yZGVyLWdyYXktNzAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgc3BhY2UteS0xXCI+XG4gICAgICAgICAgICAgIDxNb3ZpZVNlYXJjaCAvPlxuICAgICAgICAgICAgICB7Lyoge2lzU2lnbmVkSW4gPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweC0zIHB5LTJcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgdGV4dC1zbSBtci0yXCI+XG4gICAgICAgICAgICAgICAgICAgIFNpZ25lZCBpbiBhcyB7dXNlci5maXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8VXNlckJ1dHRvbiBhZnRlclNpZ25PdXRVcmw9XCIvXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8U2lnbkluQnV0dG9uIG1vZGU9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXdoaXRlIGJvcmRlci13aGl0ZSBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LWdyYXktODAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9TaWduSW5CdXR0b24+XG4gICAgICAgICAgICAgICl9ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L25hdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJGaWxtIiwiTWVudSIsIlgiLCJCdXR0b24iLCJNb3ZpZVNlYXJjaCIsIlVzZXJCdXR0b24iLCJ1c2VVc2VyIiwiTmF2YmFyIiwiaXNNb2JpbGVNZW51T3BlbiIsInNldElzTW9iaWxlTWVudU9wZW4iLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsImlzU2lnbmVkSW4iLCJ1c2VyIiwiaGFuZGxlU2Nyb2xsIiwiYmFubmVySGVpZ2h0Iiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsImFmdGVyU2lnbk91dFVybCIsInZhcmlhbnQiLCJzaXplIiwib25DbGljayIsInNwYW4iLCJhcmlhLWhpZGRlbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Navbar.tsx\n"));

/***/ })

});