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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"f636caf85097\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVjYW4vRG9jdW1lbnRzL3Byb2dyYW1taW5nIGdpZ3MvZ2VvZnJleS9jdG1jaW5lbWFzL2FwcC9nbG9iYWxzLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImY2MzZjYWY4NTA5N1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/MovieSearch.tsx":
/*!************************************!*\
  !*** ./components/MovieSearch.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieSearch)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Search_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Search!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/search.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/checkbox */ \"(app-pages-browser)/./components/ui/checkbox.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { movies } from \"@/lib/movies\";\n\n// const allMovies = [\n//   \"The Shawshank Redemption\",\n//   \"The Godfather\",\n//   \"The Dark Knight\",\n//   \"12 Angry Men\",\n//   \"Schindler's List\",\n//   \"Pulp Fiction\",\n//   \"The Lord of the Rings: The Return of the King\",\n//   \"The Good, the Bad and the Ugly\",\n//   \"Fight Club\",\n//   \"Forrest Gump\",\n// ];\nfunction MovieSearch() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [filteredMovies, setFilteredMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedMovies, setSelectedMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [allMovies, setAllMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // filter movies titles from movies to create allMovies\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MovieSearch.useEffect\": ()=>{\n            const getAllMovies = {\n                \"MovieSearch.useEffect.getAllMovies\": ()=>{\n                    axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get('http://127.0.0.1:8000/movies/movies/').then({\n                        \"MovieSearch.useEffect.getAllMovies\": (response)=>{\n                            console.log(response.data);\n                            const movieTitles = response.data.map({\n                                \"MovieSearch.useEffect.getAllMovies.movieTitles\": (movie)=>movie.title\n                            }[\"MovieSearch.useEffect.getAllMovies.movieTitles\"]);\n                            setAllMovies(movieTitles);\n                        }\n                    }[\"MovieSearch.useEffect.getAllMovies\"]).catch({\n                        \"MovieSearch.useEffect.getAllMovies\": ()=>{\n                            setAllMovies([]);\n                        }\n                    }[\"MovieSearch.useEffect.getAllMovies\"]);\n                }\n            }[\"MovieSearch.useEffect.getAllMovies\"];\n            // set allmovies\n            getAllMovies();\n        }\n    }[\"MovieSearch.useEffect\"], []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MovieSearch.useEffect\": ()=>{\n            if (searchTerm) {\n                const filtered = allMovies === null || allMovies === void 0 ? void 0 : allMovies.filter({\n                    \"MovieSearch.useEffect\": (movie)=>movie.toLowerCase().includes(searchTerm.toLowerCase())\n                }[\"MovieSearch.useEffect\"]);\n                setFilteredMovies(filtered);\n                setIsDropdownOpen(true);\n            } else {\n                setFilteredMovies([]);\n                setIsDropdownOpen(false);\n            }\n        }\n    }[\"MovieSearch.useEffect\"], [\n        searchTerm\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MovieSearch.useEffect\": ()=>{\n            function handleClickOutside(event) {\n                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {\n                    setIsDropdownOpen(false);\n                }\n            }\n            document.addEventListener(\"mousedown\", handleClickOutside);\n            return ({\n                \"MovieSearch.useEffect\": ()=>document.removeEventListener(\"mousedown\", handleClickOutside)\n            })[\"MovieSearch.useEffect\"];\n        }\n    }[\"MovieSearch.useEffect\"], []);\n    const handleMovieToggle = (movie)=>{\n        setSelectedMovies((prev)=>prev.includes(movie) ? prev.filter((m)=>m !== movie) : [\n                ...prev,\n                movie\n            ]);\n    };\n    const handleFindAndBook = ()=>{\n        if (selectedMovies.length > 0) {\n            const movieSlug = selectedMovies[0].toLowerCase().replace(/ /g, \"-\");\n            router.push(\"/movies/\".concat(movieSlug));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full sm:w-64\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Search_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400\"\n                    }, void 0, false, {\n                        fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/MovieSearch.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search movies...\",\n                        value: searchTerm,\n                        onChange: (e)=>setSearchTerm(e.target.value),\n                        className: \"w-full pl-8 pr-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                        \"aria-label\": \"Search movies\"\n                    }, void 0, false, {\n                        fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/MovieSearch.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, this),\n                    isDropdownOpen && filteredMovies.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: dropdownRef,\n                        className: \"absolute z-10 mt-1 w-full bg-gray-700 rounded-md shadow-lg max-h-60 overflow-auto\",\n                        children: filteredMovies.map((movie)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center space-x-2 p-2 hover:bg-gray-600\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_3__.Checkbox, {\n                                        id: movie,\n                                        checked: selectedMovies.includes(movie),\n                                        onCheckedChange: ()=>handleMovieToggle(movie)\n                                    }, void 0, false, {\n                                        fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/MovieSearch.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: movie,\n                                        className: \"text-sm text-gray-200 cursor-pointer\",\n                                        children: movie\n                                    }, void 0, false, {\n                                        fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/MovieSearch.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, movie, true, {\n                                fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/MovieSearch.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/MovieSearch.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/MovieSearch.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                onClick: handleFindAndBook,\n                disabled: selectedMovies.length === 0,\n                className: \"w-full sm:w-auto\",\n                children: [\n                    \"Find Times & Book (\",\n                    selectedMovies.length,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/MovieSearch.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/codecan/Documents/programming gigs/geofrey/ctmcinemas/components/MovieSearch.tsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, this);\n}\n_s(MovieSearch, \"pIRIr/dfnQp6UamK8AwpaBo75aA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = MovieSearch;\nvar _c;\n$RefreshReg$(_c, \"MovieSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTW92aWVTZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRW9EO0FBQ2Q7QUFDVTtBQUNJO0FBQ1I7QUFDNUMseUNBQXlDO0FBQ2Y7QUFFMUIsc0JBQXNCO0FBQ3RCLGdDQUFnQztBQUNoQyxxQkFBcUI7QUFDckIsdUJBQXVCO0FBQ3ZCLG9CQUFvQjtBQUNwQix3QkFBd0I7QUFDeEIsb0JBQW9CO0FBQ3BCLHFEQUFxRDtBQUNyRCxzQ0FBc0M7QUFDdEMsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQixLQUFLO0FBRVUsU0FBU1E7O0lBQ3RCLE1BQU1DLFNBQVNILDBEQUFTQTtJQUN4QixNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDWSxnQkFBZ0JDLGtCQUFrQixHQUFHYiwrQ0FBUUEsQ0FBUSxFQUFFO0lBQzlELE1BQU0sQ0FBQ2MsZ0JBQWdCQyxrQkFBa0IsR0FBR2YsK0NBQVFBLENBQVEsRUFBRTtJQUM5RCxNQUFNLENBQUNnQixnQkFBZ0JDLGtCQUFrQixHQUFHakIsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDa0IsV0FBV0MsYUFBYSxHQUFHbkIsK0NBQVFBO0lBQzFDLE1BQU1vQixjQUFjbEIsNkNBQU1BLENBQWlCO0lBRTNDLHVEQUF1RDtJQUN2REQsZ0RBQVNBO2lDQUFDO1lBQ1IsTUFBTW9CO3NEQUFlO29CQUNuQmQsNkNBQUtBLENBQUNlLEdBQUcsQ0FBQyx3Q0FBd0NDLElBQUk7OERBQUMsQ0FBQ0M7NEJBQ3REQyxRQUFRQyxHQUFHLENBQUNGLFNBQVNHLElBQUk7NEJBQ3pCLE1BQU1DLGNBQWNKLFNBQVNHLElBQUksQ0FBQ0UsR0FBRztrRkFBQyxDQUFDQyxRQUFlQSxNQUFNQyxLQUFLOzs0QkFDakVaLGFBQWFTO3dCQUNmOzZEQUFHSSxLQUFLOzhEQUFDOzRCQUNQYixhQUFhLEVBQUU7d0JBQ2pCOztnQkFDRjs7WUFDQSxnQkFBZ0I7WUFDaEJFO1FBQ0Y7Z0NBQUcsRUFBRTtJQUdMcEIsZ0RBQVNBO2lDQUFDO1lBQ1IsSUFBSVMsWUFBWTtnQkFDZCxNQUFNdUIsV0FBV2Ysc0JBQUFBLGdDQUFBQSxVQUFXZ0IsTUFBTTs2Q0FBQyxDQUFDSixRQUNsQ0EsTUFBTUssV0FBVyxHQUFHQyxRQUFRLENBQUMxQixXQUFXeUIsV0FBVzs7Z0JBRXJEdEIsa0JBQWtCb0I7Z0JBQ2xCaEIsa0JBQWtCO1lBQ3BCLE9BQU87Z0JBQ0xKLGtCQUFrQixFQUFFO2dCQUNwQkksa0JBQWtCO1lBQ3BCO1FBQ0Y7Z0NBQUc7UUFBQ1A7S0FBVztJQUVmVCxnREFBU0E7aUNBQUM7WUFDUixTQUFTb0MsbUJBQW1CQyxLQUFpQjtnQkFDM0MsSUFDRWxCLFlBQVltQixPQUFPLElBQ25CLENBQUNuQixZQUFZbUIsT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FDMUM7b0JBQ0F4QixrQkFBa0I7Z0JBQ3BCO1lBQ0Y7WUFDQXlCLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFOO1lBQ3ZDO3lDQUFPLElBQU1LLFNBQVNFLG1CQUFtQixDQUFDLGFBQWFQOztRQUN6RDtnQ0FBRyxFQUFFO0lBRUwsTUFBTVEsb0JBQW9CLENBQUNmO1FBQ3pCZixrQkFBa0IsQ0FBQytCLE9BQ2pCQSxLQUFLVixRQUFRLENBQUNOLFNBQVNnQixLQUFLWixNQUFNLENBQUMsQ0FBQ2EsSUFBTUEsTUFBTWpCLFNBQVM7bUJBQUlnQjtnQkFBTWhCO2FBQU07SUFFN0U7SUFFQSxNQUFNa0Isb0JBQW9CO1FBQ3hCLElBQUlsQyxlQUFlbUMsTUFBTSxHQUFHLEdBQUc7WUFDN0IsTUFBTUMsWUFBWXBDLGNBQWMsQ0FBQyxFQUFFLENBQUNxQixXQUFXLEdBQUdnQixPQUFPLENBQUMsTUFBTTtZQUNoRTFDLE9BQU8yQyxJQUFJLENBQUMsV0FBcUIsT0FBVkY7UUFDekI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDbkQsa0ZBQU1BO3dCQUFDbUQsV0FBVTs7Ozs7O2tDQUNsQiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU9oRDt3QkFDUGlELFVBQVUsQ0FBQ0MsSUFBTWpELGNBQWNpRCxFQUFFbkIsTUFBTSxDQUFDaUIsS0FBSzt3QkFDN0NKLFdBQVU7d0JBQ1ZPLGNBQVc7Ozs7OztvQkFFWjdDLGtCQUFrQkosZUFBZXFDLE1BQU0sR0FBRyxtQkFDekMsOERBQUNJO3dCQUNDUyxLQUFLMUM7d0JBQ0xrQyxXQUFVO2tDQUVUMUMsZUFBZWlCLEdBQUcsQ0FBQyxDQUFDQyxzQkFDbkIsOERBQUN1QjtnQ0FFQ0MsV0FBVTs7a0RBRVYsOERBQUNqRCw2REFBUUE7d0NBQ1AwRCxJQUFJakM7d0NBQ0prQyxTQUFTbEQsZUFBZXNCLFFBQVEsQ0FBQ047d0NBQ2pDbUMsaUJBQWlCLElBQU1wQixrQkFBa0JmOzs7Ozs7a0RBRTNDLDhEQUFDb0M7d0NBQ0NDLFNBQVNyQzt3Q0FDVHdCLFdBQVU7a0RBRVR4Qjs7Ozs7OzsrQkFaRUE7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBbUJmLDhEQUFDMUIseURBQU1BO2dCQUNMZ0UsU0FBU3BCO2dCQUNUcUIsVUFBVXZELGVBQWVtQyxNQUFNLEtBQUs7Z0JBQ3BDSyxXQUFVOztvQkFDWDtvQkFDcUJ4QyxlQUFlbUMsTUFBTTtvQkFBQzs7Ozs7Ozs7Ozs7OztBQUlsRDtHQS9Hd0J6Qzs7UUFDUEYsc0RBQVNBOzs7S0FERkUiLCJzb3VyY2VzIjpbIi9ob21lL2NvZGVjYW4vRG9jdW1lbnRzL3Byb2dyYW1taW5nIGdpZ3MvZ2VvZnJleS9jdG1jaW5lbWFzL2NvbXBvbmVudHMvTW92aWVTZWFyY2gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvY2hlY2tib3hcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbi8vIGltcG9ydCB7IG1vdmllcyB9IGZyb20gXCJAL2xpYi9tb3ZpZXNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy8gY29uc3QgYWxsTW92aWVzID0gW1xuLy8gICBcIlRoZSBTaGF3c2hhbmsgUmVkZW1wdGlvblwiLFxuLy8gICBcIlRoZSBHb2RmYXRoZXJcIixcbi8vICAgXCJUaGUgRGFyayBLbmlnaHRcIixcbi8vICAgXCIxMiBBbmdyeSBNZW5cIixcbi8vICAgXCJTY2hpbmRsZXIncyBMaXN0XCIsXG4vLyAgIFwiUHVscCBGaWN0aW9uXCIsXG4vLyAgIFwiVGhlIExvcmQgb2YgdGhlIFJpbmdzOiBUaGUgUmV0dXJuIG9mIHRoZSBLaW5nXCIsXG4vLyAgIFwiVGhlIEdvb2QsIHRoZSBCYWQgYW5kIHRoZSBVZ2x5XCIsXG4vLyAgIFwiRmlnaHQgQ2x1YlwiLFxuLy8gICBcIkZvcnJlc3QgR3VtcFwiLFxuLy8gXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVTZWFyY2goKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZpbHRlcmVkTW92aWVzLCBzZXRGaWx0ZXJlZE1vdmllc10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbc2VsZWN0ZWRNb3ZpZXMsIHNldFNlbGVjdGVkTW92aWVzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFtpc0Ryb3Bkb3duT3Blbiwgc2V0SXNEcm9wZG93bk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYWxsTW92aWVzLCBzZXRBbGxNb3ZpZXNdID0gdXNlU3RhdGU8U3RyaW5nW10+KClcbiAgY29uc3QgZHJvcGRvd25SZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIC8vIGZpbHRlciBtb3ZpZXMgdGl0bGVzIGZyb20gbW92aWVzIHRvIGNyZWF0ZSBhbGxNb3ZpZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRBbGxNb3ZpZXMgPSAoKSA9PiB7XG4gICAgICBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9tb3ZpZXMvbW92aWVzLycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIGNvbnN0IG1vdmllVGl0bGVzID0gcmVzcG9uc2UuZGF0YS5tYXAoKG1vdmllOiBhbnkpID0+IG1vdmllLnRpdGxlKTtcbiAgICAgICAgc2V0QWxsTW92aWVzKG1vdmllVGl0bGVzKTtcbiAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgc2V0QWxsTW92aWVzKFtdKVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8gc2V0IGFsbG1vdmllc1xuICAgIGdldEFsbE1vdmllcygpO1xuICB9LCBbXSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWFyY2hUZXJtKSB7XG4gICAgICBjb25zdCBmaWx0ZXJlZCA9IGFsbE1vdmllcz8uZmlsdGVyKChtb3ZpZSkgPT5cbiAgICAgICAgbW92aWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpXG4gICAgICApO1xuICAgICAgc2V0RmlsdGVyZWRNb3ZpZXMoZmlsdGVyZWQpO1xuICAgICAgc2V0SXNEcm9wZG93bk9wZW4odHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZpbHRlcmVkTW92aWVzKFtdKTtcbiAgICAgIHNldElzRHJvcGRvd25PcGVuKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtzZWFyY2hUZXJtXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZHJvcGRvd25SZWYuY3VycmVudCAmJlxuICAgICAgICAhZHJvcGRvd25SZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSlcbiAgICAgICkge1xuICAgICAgICBzZXRJc0Ryb3Bkb3duT3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTW92aWVUb2dnbGUgPSAobW92aWU6IHN0cmluZykgPT4ge1xuICAgIHNldFNlbGVjdGVkTW92aWVzKChwcmV2KSA9PlxuICAgICAgcHJldi5pbmNsdWRlcyhtb3ZpZSkgPyBwcmV2LmZpbHRlcigobSkgPT4gbSAhPT0gbW92aWUpIDogWy4uLnByZXYsIG1vdmllXVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRmluZEFuZEJvb2sgPSAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkTW92aWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG1vdmllU2x1ZyA9IHNlbGVjdGVkTW92aWVzWzBdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvIC9nLCBcIi1cIik7XG4gICAgICByb3V0ZXIucHVzaChgL21vdmllcy8ke21vdmllU2x1Z31gKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIHNwYWNlLXktMiBzbTpzcGFjZS15LTAgc206c3BhY2UteC0yIHctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgc206dy02NFwiPlxuICAgICAgICA8U2VhcmNoIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMiB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIHRleHQtZ3JheS00MDBcIiAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggbW92aWVzLi4uXCJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVGVybX1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFRlcm0oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwbC04IHByLTQgcHktMiByb3VuZGVkLW1kIGJnLWdyYXktNzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMFwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaCBtb3ZpZXNcIlxuICAgICAgICAvPlxuICAgICAgICB7aXNEcm9wZG93bk9wZW4gJiYgZmlsdGVyZWRNb3ZpZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtkcm9wZG93blJlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHotMTAgbXQtMSB3LWZ1bGwgYmctZ3JheS03MDAgcm91bmRlZC1tZCBzaGFkb3ctbGcgbWF4LWgtNjAgb3ZlcmZsb3ctYXV0b1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2ZpbHRlcmVkTW92aWVzLm1hcCgobW92aWUpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17bW92aWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yIHAtMiBob3ZlcjpiZy1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIGlkPXttb3ZpZX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkTW92aWVzLmluY2x1ZGVzKG1vdmllKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hlY2tlZENoYW5nZT17KCkgPT4gaGFuZGxlTW92aWVUb2dnbGUobW92aWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPXttb3ZpZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTIwMCBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge21vdmllfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgb25DbGljaz17aGFuZGxlRmluZEFuZEJvb2t9XG4gICAgICAgIGRpc2FibGVkPXtzZWxlY3RlZE1vdmllcy5sZW5ndGggPT09IDB9XG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG9cIlxuICAgICAgPlxuICAgICAgICBGaW5kIFRpbWVzICYgQm9vayAoe3NlbGVjdGVkTW92aWVzLmxlbmd0aH0pXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIlNlYXJjaCIsIkJ1dHRvbiIsIkNoZWNrYm94IiwidXNlUm91dGVyIiwiYXhpb3MiLCJNb3ZpZVNlYXJjaCIsInJvdXRlciIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiZmlsdGVyZWRNb3ZpZXMiLCJzZXRGaWx0ZXJlZE1vdmllcyIsInNlbGVjdGVkTW92aWVzIiwic2V0U2VsZWN0ZWRNb3ZpZXMiLCJpc0Ryb3Bkb3duT3BlbiIsInNldElzRHJvcGRvd25PcGVuIiwiYWxsTW92aWVzIiwic2V0QWxsTW92aWVzIiwiZHJvcGRvd25SZWYiLCJnZXRBbGxNb3ZpZXMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1vdmllVGl0bGVzIiwibWFwIiwibW92aWUiLCJ0aXRsZSIsImNhdGNoIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlTW92aWVUb2dnbGUiLCJwcmV2IiwibSIsImhhbmRsZUZpbmRBbmRCb29rIiwibGVuZ3RoIiwibW92aWVTbHVnIiwicmVwbGFjZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwiYXJpYS1sYWJlbCIsInJlZiIsImlkIiwiY2hlY2tlZCIsIm9uQ2hlY2tlZENoYW5nZSIsImxhYmVsIiwiaHRtbEZvciIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/MovieSearch.tsx\n"));

/***/ })

});