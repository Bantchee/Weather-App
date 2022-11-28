import {getWeatherData} from './weatherData';
import searchSvg from '../icons/search.svg';
import gitHubSvg from '../icons/github.svg';

export const weatherPage = (() => {
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
      document.body.classList.add('imperial');
      state.mainElement = renderMainElement(document.body);
      state.footerElement = renderFooterElement(document.body);

      updateWeatherInfo();
      bindings();
    };

    const updateWeatherInfo = async () => {
      const weatherInfo = await getWeatherData(state.location, ((document.body.classList.contains('imperial')) ? 'imperial' : 'metric'));
      console.log('Weather info ', weatherInfo);
      let weatherIcon = state.mainElement.querySelector('img.weather-icon');
      let weatherParas = state.mainElement.querySelectorAll('p');
      weatherParas.forEach((para) => {
        if(para.classList.contains('date')) {
          para.textContent = `${processSearchText(para.classList[0])}: ${weatherInfo["date"].toDateString()}`;
        } 
        else if(para.classList.contains('wind')) {
          para.textContent = `${processSearchText(para.classList[0])}: ${weatherInfo[para.classList[0]]
            + ((document.body.classList.contains('imperial')) ? ' mph' : ' kph')}`;
        }
        else {
          para.textContent = `${processSearchText(para.classList[0])}: ${weatherInfo[para.classList[0]]}`;
        }
      });
    };

    const processSearchText = (text) => capitalize(text.split('-')).join(' ');

    const capitalize = (arrText) => arrText.map((text) => text[0].toUpperCase() + text.slice(1));

    // Function that adds functionality to the interactive buttons
    // and inputs of the webpage
    const bindings = () => {
      state.searchBtn.addEventListener('click', (event) => {
        if(state.searchBar.value !== '') {
          state.location = state.searchBar.value;
          getWeatherData(state.location, ((document.body.classList.contains('imperial')) ? 'imperial' : 'metric'))
            .then((response) => {
              if(typeof(data) === 'string') {
                console.log(response);
              }
              else {
                updateWeatherInfo();
              }
            });
        }
        else {
          getWeatherData(state.location, ((document.body.classList.contains('imperial')) ? 'imperial' : 'metric'))
          .then((response) => {
            if(typeof(data) === 'string') {
              console.log(response);
            }
            else {
              updateWeatherInfo();
            }
          });
        }
        event.preventDefault();
      });

      state.unitBtn.addEventListener('click', async (event) => {
        if(document.body.classList.contains('imperial')) {
          state.unitBtn.innerHTML = '&#176;C';
          document.body.classList.remove('imperial');
          document.body.classList.add('metric');

          updateWeatherInfo();
        } 
        else if (document.body.classList.contains('metric')) {
          state.unitBtn.innerHTML = '&#176;F';
          document.body.classList.remove('metric');
          document.body.classList.add('imperial');

          updateWeatherInfo();
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
        let mainElement = createElement('div', parent, 'main');
            // Div : content
            let contentDiv = createElement('div', mainElement, null, 'content');
              // Search Form
              state.searchForm = renderSearchForm(contentDiv);
              // Img : Weather Icon
              let weatherImg = createElement('img', contentDiv, null, 'weather-icon');
              // Temp
              weatherImg.src = gitHubSvg;
              // Para : weather description
              let weatherdescriptionPara = createElement('p', contentDiv, null, 'weather-description');
              weatherdescriptionPara.textContent = 'Weather Description:';
              // Para : Location
              let weatherLocationPara = createElement('p', contentDiv, null, 'location');
              weatherLocationPara.textContent = 'Location:';
              // Para : Date
              let datePara = createElement('p', contentDiv, null, 'date');
              datePara.textContent = 'Date:';
              let divTemp = createElement('div', contentDiv, null, 'temp');
                // Para : Temp
                let tempPara = createElement('p', divTemp, null, 'temp');
                tempPara.textContent = 'Temp: ';
                // Button : Unit
                state.unitBtn = renderUnitBtnElement(divTemp);
                // Para : Feels Like
              let feelsLikePara = createElement('p', contentDiv, null, 'feels-like');
              feelsLikePara.textContent = 'Feels Like:';
              // Para : Min Temp
              let minTempPara = createElement('p', contentDiv, null, 'min-temp');
              minTempPara.textContent = 'Min Temp:';
              // Para : Max Temp
              let maxTempPara = createElement('p', contentDiv, null, 'max-temp');
              maxTempPara.textContent = 'Max Temp:';
              // Para : Wind
              let windPara = createElement('p', contentDiv, null, 'wind');
              windPara.textContent = 'Wind:';
              // Para : Humidity
              let humidityPara = createElement('p', contentDiv, null, 'humidity');
              humidityPara.textContent = 'Humidity:';
        return mainElement;
    }

    // Returns btn used to convert weather measurements from imperial to metric
    const renderUnitBtnElement = (parent) => {
      let unitBtn = createElement('button', parent, 'unit');
        unitBtn.innerHTML = "&#176;F";
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
          searchBtnImg.src = searchSvg;
      return searchBtn;
    }

    // returns an html element called main
    // In > Out : parent > Object
    const renderFooterElement = (parent) => {
        let footerElement = createElement('footer', parent, 'main');
          // Div
          let content = createElement('div', footerElement, null, 'content');
            // Para : Made by
            let madeByPara = createElement('p', content);
            madeByPara.textContent = "Made by ";
            // Button
            state.gitHubBtn = createElement('button', content, 'github-btn');
              // Img : Github
              let gitHubImg = createElement('img', state.gitHubBtn);
              gitHubImg.src = gitHubSvg;
            // Para : Jar'Zeno
            let namePara = createElement('p', content);
            namePara.textContent = " Jar'zeno Jarrett";
        return footerElement;
    }

    return Object.assign(
        {},
        {render},
    );
})();