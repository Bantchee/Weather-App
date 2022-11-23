/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/weatherData.js":
/*!************************************!*\
  !*** ./src/scripts/weatherData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
async function getWeatherData(location, unit) {
    const jsonData = await fetchWeatherData(location, unit);
    if(jsonData.cod[0] !== "4") {
        const proccessedData = await processWeatherData(jsonData);
        return proccessedData;
    } else {
        return jsonData.message;
    }
}

async function fetchWeatherData(location, unit) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=8e53cd3e15f39c560c42a1df3c50b117&units=${unit}`, 
        {mode: 'cors'}
    );
    
    const weatherDataJson = await response.json();
    return weatherDataJson;
}

// NOT DONE
async function processWeatherData(jsonData) {

    let name = await jsonData.name;
    let main = await jsonData.main;
    let weather = await jsonData.weather[0];

    return Object.assign(
        {},
        {name},
        weather,
        main,
    );
}

/***/ }),

/***/ "./src/scripts/weatherPage.js":
/*!************************************!*\
  !*** ./src/scripts/weatherPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherPage": () => (/* binding */ weatherPage)
/* harmony export */ });
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ "./src/scripts/weatherData.js");
/* harmony import */ var _icons_search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/search.svg */ "./src/icons/search.svg");



const weatherPage = (() => {
    const state = {
        location: 'coachella',
        mainElement: null,
        footerElement: null,
        searchForm: null,
        searchBtn: null,
        searchBar: null,
        unitBtn: null,
        gitHubBtn: null,
    };

    const render = () => {
        state.mainElement = renderMainElement(document.body);
        state.footerElement = renderFooterElement(document.body);

        bindings();
    };

    // Function that adds functionality to the interactive buttons
    // and inputs of the webpage
    const bindings = () => {
      state.searchBtn.addEventListener('click', (event) => {
        if(state.searchBar.value !== '') {
          state.location = state.searchBar.value;
          (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(state.location, ((state.mainElement.classList.contains('imperial')) ? 'imperial' : 'metric'))
            .then((response) => {
              if(typeof(data) === 'string') {
                console.log(response);
              }
              else {
                // function to update page weather info with data in object
                console.log(response);
              }
            });
        }
        else {
          (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(state.location, ((state.mainElement.classList.contains('imperial')) ? 'imperial' : 'metric'))
          .then((response) => {
            if(typeof(data) === 'string') {
              console.log(response);
            }
            else {
              // function to update page weather info with data in object
              console.log(response);
            }
          });
        }
        event.preventDefault();
      });

      state.unitBtn.addEventListener('click', async (event) => {
        if(state.mainElement.classList.contains('imperial')) {
          state.unitBtn.textContent = 'C';
          let data = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(state.location, 'metric');
          console.log(data);

          state.mainElement.classList.remove('imperial');
          state.mainElement.classList.add('metric');
        } 
        else if (state.mainElement.classList.contains('metric')) {
          state.unitBtn.textContent = 'F';
          let data = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(state.location, 'imperial');
          console.log(data);

          state.mainElement.classList.remove('metric');
          state.mainElement.classList.add('imperial');
        }
      });

    };

    // Function that returns a new html element
    // In > Out: String Object String List-of-Strings > Object
    // In > Out: Element-Type Parent-Object Id Classes > Element-Object
    const createElement = (elementType, parentObject, id = null, classes = null) => {
        const element = document.createElement(elementType);
        parentObject.appendChild(element);
        if (classes !== null) {
          if (Array.isArray(classes)) {
            for (let i = 0; i < classes.length; i++) {
              element.classList.add(classes[i]);
            }
          } else {
            element.classList.add(classes);
          }
        }
        if (id !== null) {
          element.setAttribute("id", id);
        }
        return element;
    };

    // returns an html element called main
    // In > Out : Void > Object
    const renderMainElement = (parent) => {
        let mainElement = createElement('div', parent, 'main', 'imperial');
            // Child elements
            state.searchForm = renderSearchForm(mainElement);
            state.unitBtn = renderUnitBtnElement(mainElement);
        return mainElement;
    }

    // Returns btn used to convert weather measurements from imperial to metric
    const renderUnitBtnElement = (parent) => {
      let unitBtn = createElement('button', parent, 'unit');
        unitBtn.textContent = "F";
      return unitBtn;
    }


    const renderSearchForm = (parent) => {
      let searchForm = createElement('form', parent, 'search-element');
      // Children
        state.searchBar = renderSearchBar(searchForm);
        state.searchBtn = renderSearchBtn(searchForm);
      return searchForm;
    }

    const renderSearchBar = (parent) => {
      let searchBar = createElement('input', parent, 'search-bar');
      return searchBar;
    }

    const renderSearchBtn = (parent) => {
      let searchBtn = createElement('button', parent, 'search-btn');
        // Children
          let searchBtnImg = createElement('img', searchBtn);
          searchBtnImg.src = _icons_search_svg__WEBPACK_IMPORTED_MODULE_1__;
      return searchBtn;
    }

    // returns an html element called main
    // In > Out : parent > Object
    const renderFooterElement = (parent) => {
        let footerElement = createElement('footer', parent, 'main');
            // Child elements
        return footerElement;
    }

    return Object.assign(
        {},
        {render},
    );
})();

/***/ }),

/***/ "./src/icons/search.svg":
/*!******************************!*\
  !*** ./src/icons/search.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9705ffe407455bd10ed.svg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_weatherPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/weatherPage */ "./src/scripts/weatherPage.js");
/* harmony import */ var _scripts_weatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/weatherData */ "./src/scripts/weatherData.js");



_scripts_weatherPage__WEBPACK_IMPORTED_MODULE_0__.weatherPage.render();

// getWeatherData('london', 'imperial');
// getWeatherData('coachella', 'imperial');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2REFBNkQsU0FBUyxnREFBZ0QsS0FBSztBQUMzSCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixTQUFTLEtBQUs7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDNkM7QUFDRDs7QUFFckM7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLDREQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFVBQVUsNERBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNERBQWM7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0REFBYztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw4Q0FBUztBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBVTtBQUNWLFNBQVMsT0FBTztBQUNoQjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuSkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNma0Q7QUFDRzs7QUFFckQsb0VBQWtCOztBQUVsQjtBQUNBLDJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy93ZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zY3JpcHRzL3dlYXRoZXJQYWdlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQpIHtcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IGZldGNoV2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQpO1xuICAgIGlmKGpzb25EYXRhLmNvZFswXSAhPT0gXCI0XCIpIHtcbiAgICAgICAgY29uc3QgcHJvY2Nlc3NlZERhdGEgPSBhd2FpdCBwcm9jZXNzV2VhdGhlckRhdGEoanNvbkRhdGEpO1xuICAgICAgICByZXR1cm4gcHJvY2Nlc3NlZERhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGpzb25EYXRhLm1lc3NhZ2U7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXJEYXRhKGxvY2F0aW9uLCB1bml0KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9OGU1M2NkM2UxNWYzOWM1NjBjNDJhMWRmM2M1MGIxMTcmdW5pdHM9JHt1bml0fWAsIFxuICAgICAgICB7bW9kZTogJ2NvcnMnfVxuICAgICk7XG4gICAgXG4gICAgY29uc3Qgd2VhdGhlckRhdGFKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiB3ZWF0aGVyRGF0YUpzb247XG59XG5cbi8vIE5PVCBET05FXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzV2VhdGhlckRhdGEoanNvbkRhdGEpIHtcblxuICAgIGxldCBuYW1lID0gYXdhaXQganNvbkRhdGEubmFtZTtcbiAgICBsZXQgbWFpbiA9IGF3YWl0IGpzb25EYXRhLm1haW47XG4gICAgbGV0IHdlYXRoZXIgPSBhd2FpdCBqc29uRGF0YS53ZWF0aGVyWzBdO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICB7bmFtZX0sXG4gICAgICAgIHdlYXRoZXIsXG4gICAgICAgIG1haW4sXG4gICAgKTtcbn0iLCJpbXBvcnQge2dldFdlYXRoZXJEYXRhfSBmcm9tICcuL3dlYXRoZXJEYXRhJztcbmltcG9ydCBzZWFyY2hTdmcgZnJvbSAnLi4vaWNvbnMvc2VhcmNoLnN2Zyc7XG5cbmV4cG9ydCBjb25zdCB3ZWF0aGVyUGFnZSA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGxvY2F0aW9uOiAnY29hY2hlbGxhJyxcbiAgICAgICAgbWFpbkVsZW1lbnQ6IG51bGwsXG4gICAgICAgIGZvb3RlckVsZW1lbnQ6IG51bGwsXG4gICAgICAgIHNlYXJjaEZvcm06IG51bGwsXG4gICAgICAgIHNlYXJjaEJ0bjogbnVsbCxcbiAgICAgICAgc2VhcmNoQmFyOiBudWxsLFxuICAgICAgICB1bml0QnRuOiBudWxsLFxuICAgICAgICBnaXRIdWJCdG46IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgc3RhdGUubWFpbkVsZW1lbnQgPSByZW5kZXJNYWluRWxlbWVudChkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgc3RhdGUuZm9vdGVyRWxlbWVudCA9IHJlbmRlckZvb3RlckVsZW1lbnQoZG9jdW1lbnQuYm9keSk7XG5cbiAgICAgICAgYmluZGluZ3MoKTtcbiAgICB9O1xuXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBhZGRzIGZ1bmN0aW9uYWxpdHkgdG8gdGhlIGludGVyYWN0aXZlIGJ1dHRvbnNcbiAgICAvLyBhbmQgaW5wdXRzIG9mIHRoZSB3ZWJwYWdlXG4gICAgY29uc3QgYmluZGluZ3MgPSAoKSA9PiB7XG4gICAgICBzdGF0ZS5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYoc3RhdGUuc2VhcmNoQmFyLnZhbHVlICE9PSAnJykge1xuICAgICAgICAgIHN0YXRlLmxvY2F0aW9uID0gc3RhdGUuc2VhcmNoQmFyLnZhbHVlO1xuICAgICAgICAgIGdldFdlYXRoZXJEYXRhKHN0YXRlLmxvY2F0aW9uLCAoKHN0YXRlLm1haW5FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaW1wZXJpYWwnKSkgPyAnaW1wZXJpYWwnIDogJ21ldHJpYycpKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgIGlmKHR5cGVvZihkYXRhKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZnVuY3Rpb24gdG8gdXBkYXRlIHBhZ2Ugd2VhdGhlciBpbmZvIHdpdGggZGF0YSBpbiBvYmplY3RcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGdldFdlYXRoZXJEYXRhKHN0YXRlLmxvY2F0aW9uLCAoKHN0YXRlLm1haW5FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaW1wZXJpYWwnKSkgPyAnaW1wZXJpYWwnIDogJ21ldHJpYycpKVxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYodHlwZW9mKGRhdGEpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gZnVuY3Rpb24gdG8gdXBkYXRlIHBhZ2Ugd2VhdGhlciBpbmZvIHdpdGggZGF0YSBpbiBvYmplY3RcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcblxuICAgICAgc3RhdGUudW5pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBpZihzdGF0ZS5tYWluRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ltcGVyaWFsJykpIHtcbiAgICAgICAgICBzdGF0ZS51bml0QnRuLnRleHRDb250ZW50ID0gJ0MnO1xuICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoc3RhdGUubG9jYXRpb24sICdtZXRyaWMnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICAgIHN0YXRlLm1haW5FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2ltcGVyaWFsJyk7XG4gICAgICAgICAgc3RhdGUubWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWV0cmljJyk7XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYgKHN0YXRlLm1haW5FbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWV0cmljJykpIHtcbiAgICAgICAgICBzdGF0ZS51bml0QnRuLnRleHRDb250ZW50ID0gJ0YnO1xuICAgICAgICAgIGxldCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoc3RhdGUubG9jYXRpb24sICdpbXBlcmlhbCcpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgc3RhdGUubWFpbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWV0cmljJyk7XG4gICAgICAgICAgc3RhdGUubWFpbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaW1wZXJpYWwnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgLy8gRnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbmV3IGh0bWwgZWxlbWVudFxuICAgIC8vIEluID4gT3V0OiBTdHJpbmcgT2JqZWN0IFN0cmluZyBMaXN0LW9mLVN0cmluZ3MgPiBPYmplY3RcbiAgICAvLyBJbiA+IE91dDogRWxlbWVudC1UeXBlIFBhcmVudC1PYmplY3QgSWQgQ2xhc3NlcyA+IEVsZW1lbnQtT2JqZWN0XG4gICAgY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50VHlwZSwgcGFyZW50T2JqZWN0LCBpZCA9IG51bGwsIGNsYXNzZXMgPSBudWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlKTtcbiAgICAgICAgcGFyZW50T2JqZWN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICBpZiAoY2xhc3NlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNsYXNzZXMpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpZCAhPT0gbnVsbCkge1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH07XG5cbiAgICAvLyByZXR1cm5zIGFuIGh0bWwgZWxlbWVudCBjYWxsZWQgbWFpblxuICAgIC8vIEluID4gT3V0IDogVm9pZCA+IE9iamVjdFxuICAgIGNvbnN0IHJlbmRlck1haW5FbGVtZW50ID0gKHBhcmVudCkgPT4ge1xuICAgICAgICBsZXQgbWFpbkVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCBwYXJlbnQsICdtYWluJywgJ2ltcGVyaWFsJyk7XG4gICAgICAgICAgICAvLyBDaGlsZCBlbGVtZW50c1xuICAgICAgICAgICAgc3RhdGUuc2VhcmNoRm9ybSA9IHJlbmRlclNlYXJjaEZvcm0obWFpbkVsZW1lbnQpO1xuICAgICAgICAgICAgc3RhdGUudW5pdEJ0biA9IHJlbmRlclVuaXRCdG5FbGVtZW50KG1haW5FbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIG1haW5FbGVtZW50O1xuICAgIH1cblxuICAgIC8vIFJldHVybnMgYnRuIHVzZWQgdG8gY29udmVydCB3ZWF0aGVyIG1lYXN1cmVtZW50cyBmcm9tIGltcGVyaWFsIHRvIG1ldHJpY1xuICAgIGNvbnN0IHJlbmRlclVuaXRCdG5FbGVtZW50ID0gKHBhcmVudCkgPT4ge1xuICAgICAgbGV0IHVuaXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBwYXJlbnQsICd1bml0Jyk7XG4gICAgICAgIHVuaXRCdG4udGV4dENvbnRlbnQgPSBcIkZcIjtcbiAgICAgIHJldHVybiB1bml0QnRuO1xuICAgIH1cblxuXG4gICAgY29uc3QgcmVuZGVyU2VhcmNoRm9ybSA9IChwYXJlbnQpID0+IHtcbiAgICAgIGxldCBzZWFyY2hGb3JtID0gY3JlYXRlRWxlbWVudCgnZm9ybScsIHBhcmVudCwgJ3NlYXJjaC1lbGVtZW50Jyk7XG4gICAgICAvLyBDaGlsZHJlblxuICAgICAgICBzdGF0ZS5zZWFyY2hCYXIgPSByZW5kZXJTZWFyY2hCYXIoc2VhcmNoRm9ybSk7XG4gICAgICAgIHN0YXRlLnNlYXJjaEJ0biA9IHJlbmRlclNlYXJjaEJ0bihzZWFyY2hGb3JtKTtcbiAgICAgIHJldHVybiBzZWFyY2hGb3JtO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclNlYXJjaEJhciA9IChwYXJlbnQpID0+IHtcbiAgICAgIGxldCBzZWFyY2hCYXIgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHBhcmVudCwgJ3NlYXJjaC1iYXInKTtcbiAgICAgIHJldHVybiBzZWFyY2hCYXI7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyU2VhcmNoQnRuID0gKHBhcmVudCkgPT4ge1xuICAgICAgbGV0IHNlYXJjaEJ0biA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHBhcmVudCwgJ3NlYXJjaC1idG4nKTtcbiAgICAgICAgLy8gQ2hpbGRyZW5cbiAgICAgICAgICBsZXQgc2VhcmNoQnRuSW1nID0gY3JlYXRlRWxlbWVudCgnaW1nJywgc2VhcmNoQnRuKTtcbiAgICAgICAgICBzZWFyY2hCdG5JbWcuc3JjID0gc2VhcmNoU3ZnO1xuICAgICAgcmV0dXJuIHNlYXJjaEJ0bjtcbiAgICB9XG5cbiAgICAvLyByZXR1cm5zIGFuIGh0bWwgZWxlbWVudCBjYWxsZWQgbWFpblxuICAgIC8vIEluID4gT3V0IDogcGFyZW50ID4gT2JqZWN0XG4gICAgY29uc3QgcmVuZGVyRm9vdGVyRWxlbWVudCA9IChwYXJlbnQpID0+IHtcbiAgICAgICAgbGV0IGZvb3RlckVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KCdmb290ZXInLCBwYXJlbnQsICdtYWluJyk7XG4gICAgICAgICAgICAvLyBDaGlsZCBlbGVtZW50c1xuICAgICAgICByZXR1cm4gZm9vdGVyRWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHtyZW5kZXJ9LFxuICAgICk7XG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7d2VhdGhlclBhZ2V9IGZyb20gJy4vc2NyaXB0cy93ZWF0aGVyUGFnZSc7XG5pbXBvcnQge2dldFdlYXRoZXJEYXRhfSBmcm9tICcuL3NjcmlwdHMvd2VhdGhlckRhdGEnO1xuXG53ZWF0aGVyUGFnZS5yZW5kZXIoKTtcblxuLy8gZ2V0V2VhdGhlckRhdGEoJ2xvbmRvbicsICdpbXBlcmlhbCcpO1xuLy8gZ2V0V2VhdGhlckRhdGEoJ2NvYWNoZWxsYScsICdpbXBlcmlhbCcpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==