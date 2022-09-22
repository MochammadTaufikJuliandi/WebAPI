import meals from "./meals.js";

function DataSource(onSucces, onFailed) {
    this.onSucces = onSucces;
    this.onFailed = onFailed;
}

DataSource.prototype.searchMeal = function (keyword) {
    const filteredMeals = meals.filter(function (meal) {
        return meal.name.toUpperCase().includes(keyword.toUpperCase());
    });

    if (filteredMeals.length) {
        this.onSucces(filteredMeals);
    } else {
        this.onFailed(keyword + ' is not found');
    }
};

export default DataSource;