class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector('#searchElement').value;
    }

    render() {
        this.innerHTML = `
        <div id="search-container" class="search-container">
            <input type="search" placeholder="Search Meal" id="searchElement">
            <button id="searchButtonElement" type="submit">SEARCH</button>
        </div>
        `;

        this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);