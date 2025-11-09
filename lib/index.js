// Core 
import State from './state';
import Toast from './toast';
//Default Styles
import './style.css'
// Shawdow Dom Styles
import styles from './toasts.css?inline';

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

export class WcSonner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.adoptedStyleSheets = [sheet];
    this._state;
  }

  showTimedElement(element) {
    let remaining = 5000;
    let start;
    let hideTimeout;

    const hide = () => {
      element.remove();
    };

    const startTimer = () => {
      start = Date.now();
      hideTimeout = setTimeout(hide, remaining);
    };

    const pauseTimer = () => {
      clearTimeout(hideTimeout);
      if (start) {
        remaining -= Date.now() - start;
      }
    };

    startTimer();

    element.addEventListener('mouseenter', pauseTimer);
    element.addEventListener('mouseleave', startTimer);
    element.querySelector('button').addEventListener('click', hide)
  }

  connectedCallback() {
    this._state = new State();
  }

  addToast(template) {
    const toastWrapper = document.createElement('div');
    toastWrapper.innerHTML = template.trim();
    const toastElement = toastWrapper.firstElementChild;

    if (toastElement) {
      this.shadowRoot.appendChild(toastElement);
      this.showTimedElement(toastElement);
    }
  }

  getRef() {
    console.log(this._state.ref)
    return this._state.ref
  }
}

customElements.define("wc-sonner", WcSonner);

const toast = new Toast()
toast.setToaster(document.querySelector('wc-sonner'))

export { toast }