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
        state.mainElement = renderMainElement(document.body);
        state.footerElement = renderFooterElement(document.body);

        updateWeatherInfo();
        bindings();
    };

    const updateWeatherInfo = async () => {
      const weatherInfo = await getWeatherData(state.location, ((state.mainElement.classList.contains('imperial')) ? 'imperial' : 'metric'));
      console.log('Weather info ', weatherInfo);
      let weatherIcon = state.mainElement.querySelector('img.weather-icon');
      let weatherParas = state.mainElement.querySelectorAll('p');
      weatherParas.forEach((para) => {
        console.log(para.classList[0]);
        if(para.classList.contains('date')) {
          para.textContent = `${para.classList}: ${weatherInfo["date"].toDateString()}`;
        } 
        else {
          para.textContent = `${para.classList}: ${weatherInfo[para.classList[0]]}`;
        }
      });
    };

    // Function that adds functionality to the interactive buttons
    // and inputs of the webpage
    const bindings = () => {
      state.searchBtn.addEventListener('click', (event) => {
        if(state.searchBar.value !== '') {
          state.location = state.searchBar.value;
          getWeatherData(state.location, ((state.mainElement.classList.contains('imperial')) ? 'imperial' : 'metric'))
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
          getWeatherData(state.location, ((state.mainElement.classList.contains('imperial')) ? 'imperial' : 'metric'))
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
          state.unitBtn.innerHTML = '&#176;C';
          let data = await getWeatherData(state.location, 'metric');
          console.log(data);

          state.mainElement.classList.remove('imperial');
          state.mainElement.classList.add('metric');
        } 
        else if (state.mainElement.classList.contains('metric')) {
          state.unitBtn.innerHTML = '&#176;F';
          let data = await getWeatherData(state.location, 'imperial');
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
            // Div : content
            let contentDiv = createElement('div', mainElement, null, 'content');
              // Search Form
              state.searchForm = renderSearchForm(contentDiv);
              // Div : Content
              let containerDiv = createElement('div', contentDiv, null, "container");
                // Div : Img
                let imgDiv = createElement('div', containerDiv, null, 'img-div');
                  // Img : Weather Icon
                  let weatherImg = createElement('img', imgDiv, null, 'weather-icon');
                  // Temp
                  weatherImg.src = gitHubSvg;
                // Div : weather-info
                let weatherInfoDiv = createElement('div', containerDiv, null, 'weather-info');
                  // Div : Top
                  let topInfoDiv = createElement('div', weatherInfoDiv, null, 'top');
                    // Para : weather description
                    let weatherdescriptionPara = createElement('p', topInfoDiv, null, 'weather-description');
                    weatherdescriptionPara.textContent = 'Sunny';
                    // Para : Location
                    let weatherLocationPara = createElement('p', topInfoDiv, null, 'location');
                    weatherLocationPara.textContent = 'Coachella, California';
                  // Div : Left-Right
                  let leftRightDiv = createElement('div', containerDiv, null, 'left-right');
                    // Div : Left
                    let leftDiv = createElement('div', leftRightDiv, null, 'left');
                      // Para : Date
                      let datePara = createElement('p', leftDiv, null, 'date');
                      datePara.textContent = 'Date: Nov 23, 2022';
                      // Div : temp
                      let tempDiv = createElement('div', leftDiv, null, 'temp');
                        // Para : Temp
                        let tempPara = createElement('p', tempDiv, null, 'temp');
                        tempPara.textContent = '73';
                        // Button : Unit
                        state.unitBtn = renderUnitBtnElement(tempDiv);
                    // Div : Right
                    let rightDiv = createElement('div', leftRightDiv, null, 'right');
                      // Para : Feels Like
                      let feelsLikePara = createElement('p', rightDiv, null, 'feels-like');
                      feelsLikePara.textContent = 'Feels Like: 72';
                      // Para : Min Temp
                      let minTempPara = createElement('p', rightDiv, null, 'min-temp');
                      minTempPara.textContent = 'Min Temp: 63';
                      // Para : Max Temp
                      let maxTempPara = createElement('p', rightDiv, null, 'max-temp');
                      maxTempPara.textContent = 'Max Temp: 80';
                      // Para : Wind
                      let windPara = createElement('p', rightDiv, null, 'wind');
                      windPara.textContent = 'Wind: 4 mph';
                      // Para : Humidity
                      let humidityPara = createElement('p', rightDiv, null, 'humidity');
                      humidityPara.textContent = 'Humidity: 8%';
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