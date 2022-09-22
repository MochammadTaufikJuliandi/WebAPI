import DataSource from "./component/data-source";
import "./component/meal-item";
import "./component/search-bar";

const main = () => {
    const searchElement = document.querySelector('#searchElement');
    const buttonSearchElement = document.querySelector('#searchButtonElement');
    const mealList = document.querySelector('#mealList')

    const onButtonSearchClicked = function () {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchElement(searchElement.value);
    };

    const renderResult = function (results) {
        mealList.innerHTML = '';
        results.forEach(function (meal) {
            const name = meal.name;
            const fanArt = meal.fanArt;
            const description = meal.description;

            const mealElement = document.createElement('div');
            mealElement.setAttribute('class', 'meal');

            mealElement.innerHTML =  '<img class="fan-art-meal" src="' + fanArt + '" alt="Fan Art">\n' +
            '<div class="meal-info">\n' +
            '<h2>' + name + '</h2>\n' +
            '<p>' + description + '</p>' +
            '</div>';
        mealList.appendChild(mealElement);
        });
    };

    const fallbackResult = function (message) {
        mealList.innerHTML = '';
        mealList.innerHTML += '<h2 class="placeholder">' + message + '</h2>'
    };

    buttonSearchElement.addEventListener('click', onButtonSearchClicked);
};
export default main;