import styles from './style.css?inline';

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

export class WcSonner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [sheet];
  }

  connectedCallback() {
    console.log('Created wc-sonner')
  }

  add(message) {
    const template = `
    <div class="wc-toast">
      <span class="wc-toast-message">${message}</span>
    </div>
    `;

    this.shadowRoot.innerHTML += template;
  }
}

customElements.define("wc-sonner", WcSonner);

class Toast {
  constructor() {
    this.sonner = document.querySelector('wc-sonner')
  }

  show(message) {
    this.sonner.add(message)
  }
}

export const toast = new Toast()