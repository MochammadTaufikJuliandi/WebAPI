class AppBar extends HTMLElement {
  constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
      this.render();
  }

  render() {
      this.shadowDOM.innerHTML = `
      <style>
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
      :host {
          display: block;
          text-align: center;
          background-color: transparant;
          color: white;
          margin-bottom: 100px;
          font-size: 2rem;
        }
        h2 {
          padding: 16px;
        }          
      </style>

      <h2>Zona Makanan</h2>
      `;
  }
}

customElements.define("app-bar", AppBar);