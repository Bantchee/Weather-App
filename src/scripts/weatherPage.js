import {getWeatherData} from './weatherData';

export const weatherPage = (() => {
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
          state.unitBtn.textContent = 'C';
          getWeatherData(state.location, 'metric');

          state.mainElement.classList.remove('imperial');
          state.mainElement.classList.add('metric');
        } 
        else if (state.mainElement.classList.contains('metric')) {
          state.unitBtn.textContent = 'F';
          getWeatherData(state.location, 'imperial');

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