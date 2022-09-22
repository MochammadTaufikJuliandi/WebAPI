class MealItem extends HTMLElement {
    set meals(meals) {
        this._meals = meals;
        this.render();
    }
    
    render() {
        this.innerHTML = `
        <img class="fan-art-meal" src="${this._meals.fanArt}" alt="${this._meals.name}">
        <div class="meal-info">
            <h2><a href="${this._meals.id}">${this._meals.name}</a></h2>
            <p>${this._meals.description}</p>
            </div>
        `;
    }
}

customElements.define('meal-item', MealItem);