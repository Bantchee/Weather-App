/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/fetchWeatherData.js":
/*!*****************************************!*\
  !*** ./src/scripts/fetchWeatherData.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
async function getWeatherData(location, unit) {
    const mainElement = document.body.querySelector("#main");

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=8e53cd3e15f39c560c42a1df3c50b117&units=${unit}`, 
        {mode: 'cors'}
    );
    
    const weatherData = await response.json();
    console.log(weatherData);
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
/* harmony import */ var _fetchWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchWeatherData */ "./src/scripts/fetchWeatherData.js");


const weatherPage = (() => {
    const state = {
        location: 'coachella',
        mainElement: null,
        footerElement: null,
        searchBtn: null,
        searchBar: null,
        unitBtn: null,
        gitHubBtn: null,
    };

    const render = () => {
        state.mainElement = renderMainElement();
        state.footerElement = renderFooterElement();

        bindings();
    };

    // Function that adds functionality to the interactive buttons
    // and inputs of the webpage
    const bindings = () => {
      state.unitBtn.addEventListener('click', (event) => {
        if(state.mainElement.classList.contains('imperial')) {
          state.unitBtn.textContent = 'F';
          (0,_fetchWeatherData__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(state.location, 'metric');

          state.mainElement.classList.remove('imperial');
          state.mainElement.classList.add('metric');
        } 
        else if (state.mainElement.classList.contains('metric')) {
          state.unitBtn.textContent = 'C';
          (0,_fetchWeatherData__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(state.location, 'imperial');

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
    const renderMainElement = () => {
        let mainElement = createElement('div', document.body, 'main', 'imperial');
            // Child elements
            state.unitBtn = renderUnitBtnElement(mainElement);
        return mainElement;
    }

    const renderUnitBtnElement = (parent) => {
      let unitBtn = createElement('button', parent, 'unit');
        unitBtn.textContent = "F";
      return unitBtn;
    }


    // returns an html element called main
    // In > Out : Void > Object
    const renderFooterElement = () => {
        let footerElement = createElement('footer', document.body, 'main');
            // Child elements
        return footerElement;
    }

    return Object.assign(
        {},
        {render},
    );
})();

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_weatherPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/weatherPage */ "./src/scripts/weatherPage.js");
/* harmony import */ var _scripts_fetchWeatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/fetchWeatherData */ "./src/scripts/fetchWeatherData.js");



_scripts_weatherPage__WEBPACK_IMPORTED_MODULE_0__.weatherPage.render();

// getWeatherData('london', 'imperial');
// getWeatherData('coachella', 'imperial');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7O0FBRUE7QUFDQSw2REFBNkQsU0FBUyxnREFBZ0QsS0FBSztBQUMzSCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVmtEOztBQUUzQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlFQUFjOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxpRUFBYzs7QUFFeEI7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVixTQUFTLE9BQU87QUFDaEI7QUFDQSxDQUFDOzs7Ozs7VUMzRkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOa0Q7QUFDUTs7QUFFMUQsb0VBQWtCOztBQUVsQjtBQUNBLDJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2NyaXB0cy9mZXRjaFdlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NjcmlwdHMvd2VhdGhlclBhZ2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXQpIHtcbiAgICBjb25zdCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIiNtYWluXCIpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9OGU1M2NkM2UxNWYzOWM1NjBjNDJhMWRmM2M1MGIxMTcmdW5pdHM9JHt1bml0fWAsIFxuICAgICAgICB7bW9kZTogJ2NvcnMnfVxuICAgICk7XG4gICAgXG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xufSIsImltcG9ydCB7Z2V0V2VhdGhlckRhdGF9IGZyb20gJy4vZmV0Y2hXZWF0aGVyRGF0YSc7XG5cbmV4cG9ydCBjb25zdCB3ZWF0aGVyUGFnZSA9ICgoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSB7XG4gICAgICAgIGxvY2F0aW9uOiAnY29hY2hlbGxhJyxcbiAgICAgICAgbWFpbkVsZW1lbnQ6IG51bGwsXG4gICAgICAgIGZvb3RlckVsZW1lbnQ6IG51bGwsXG4gICAgICAgIHNlYXJjaEJ0bjogbnVsbCxcbiAgICAgICAgc2VhcmNoQmFyOiBudWxsLFxuICAgICAgICB1bml0QnRuOiBudWxsLFxuICAgICAgICBnaXRIdWJCdG46IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgICAgc3RhdGUubWFpbkVsZW1lbnQgPSByZW5kZXJNYWluRWxlbWVudCgpO1xuICAgICAgICBzdGF0ZS5mb290ZXJFbGVtZW50ID0gcmVuZGVyRm9vdGVyRWxlbWVudCgpO1xuXG4gICAgICAgIGJpbmRpbmdzKCk7XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgYWRkcyBmdW5jdGlvbmFsaXR5IHRvIHRoZSBpbnRlcmFjdGl2ZSBidXR0b25zXG4gICAgLy8gYW5kIGlucHV0cyBvZiB0aGUgd2VicGFnZVxuICAgIGNvbnN0IGJpbmRpbmdzID0gKCkgPT4ge1xuICAgICAgc3RhdGUudW5pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBpZihzdGF0ZS5tYWluRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ltcGVyaWFsJykpIHtcbiAgICAgICAgICBzdGF0ZS51bml0QnRuLnRleHRDb250ZW50ID0gJ0YnO1xuICAgICAgICAgIGdldFdlYXRoZXJEYXRhKHN0YXRlLmxvY2F0aW9uLCAnbWV0cmljJyk7XG5cbiAgICAgICAgICBzdGF0ZS5tYWluRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbXBlcmlhbCcpO1xuICAgICAgICAgIHN0YXRlLm1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21ldHJpYycpO1xuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmIChzdGF0ZS5tYWluRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21ldHJpYycpKSB7XG4gICAgICAgICAgc3RhdGUudW5pdEJ0bi50ZXh0Q29udGVudCA9ICdDJztcbiAgICAgICAgICBnZXRXZWF0aGVyRGF0YShzdGF0ZS5sb2NhdGlvbiwgJ2ltcGVyaWFsJyk7XG5cbiAgICAgICAgICBzdGF0ZS5tYWluRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZXRyaWMnKTtcbiAgICAgICAgICBzdGF0ZS5tYWluRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpbXBlcmlhbCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIH07XG5cbiAgICAvLyBGdW5jdGlvbiB0aGF0IHJldHVybnMgYSBuZXcgaHRtbCBlbGVtZW50XG4gICAgLy8gSW4gPiBPdXQ6IFN0cmluZyBPYmplY3QgU3RyaW5nIExpc3Qtb2YtU3RyaW5ncyA+IE9iamVjdFxuICAgIC8vIEluID4gT3V0OiBFbGVtZW50LVR5cGUgUGFyZW50LU9iamVjdCBJZCBDbGFzc2VzID4gRWxlbWVudC1PYmplY3RcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50ID0gKGVsZW1lbnRUeXBlLCBwYXJlbnRPYmplY3QsIGlkID0gbnVsbCwgY2xhc3NlcyA9IG51bGwpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICAgICAgICBwYXJlbnRPYmplY3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIGlmIChjbGFzc2VzICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NlcykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkICE9PSBudWxsKSB7XG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfTtcblxuICAgIC8vIHJldHVybnMgYW4gaHRtbCBlbGVtZW50IGNhbGxlZCBtYWluXG4gICAgLy8gSW4gPiBPdXQgOiBWb2lkID4gT2JqZWN0XG4gICAgY29uc3QgcmVuZGVyTWFpbkVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtYWluRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIGRvY3VtZW50LmJvZHksICdtYWluJywgJ2ltcGVyaWFsJyk7XG4gICAgICAgICAgICAvLyBDaGlsZCBlbGVtZW50c1xuICAgICAgICAgICAgc3RhdGUudW5pdEJ0biA9IHJlbmRlclVuaXRCdG5FbGVtZW50KG1haW5FbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIG1haW5FbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclVuaXRCdG5FbGVtZW50ID0gKHBhcmVudCkgPT4ge1xuICAgICAgbGV0IHVuaXRCdG4gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCBwYXJlbnQsICd1bml0Jyk7XG4gICAgICAgIHVuaXRCdG4udGV4dENvbnRlbnQgPSBcIkZcIjtcbiAgICAgIHJldHVybiB1bml0QnRuO1xuICAgIH1cblxuXG4gICAgLy8gcmV0dXJucyBhbiBodG1sIGVsZW1lbnQgY2FsbGVkIG1haW5cbiAgICAvLyBJbiA+IE91dCA6IFZvaWQgPiBPYmplY3RcbiAgICBjb25zdCByZW5kZXJGb290ZXJFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICBsZXQgZm9vdGVyRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicsIGRvY3VtZW50LmJvZHksICdtYWluJyk7XG4gICAgICAgICAgICAvLyBDaGlsZCBlbGVtZW50c1xuICAgICAgICByZXR1cm4gZm9vdGVyRWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHtyZW5kZXJ9LFxuICAgICk7XG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt3ZWF0aGVyUGFnZX0gZnJvbSAnLi9zY3JpcHRzL3dlYXRoZXJQYWdlJztcbmltcG9ydCB7Z2V0V2VhdGhlckRhdGF9IGZyb20gJy4vc2NyaXB0cy9mZXRjaFdlYXRoZXJEYXRhJztcblxud2VhdGhlclBhZ2UucmVuZGVyKCk7XG5cbi8vIGdldFdlYXRoZXJEYXRhKCdsb25kb24nLCAnaW1wZXJpYWwnKTtcbi8vIGdldFdlYXRoZXJEYXRhKCdjb2FjaGVsbGEnLCAnaW1wZXJpYWwnKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=