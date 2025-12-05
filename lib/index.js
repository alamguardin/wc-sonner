// Core
import Toast from './scripts/toast.js';
// Shawdow Dom Styles
import styles from './styles/toasts.css?inline';

const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

/**
 * @class WcBeru
 * @extends {HTMLElement}
 * @description A custom element for displaying toast notifications.
 */
export class WcBeru extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.adoptedStyleSheets = [sheet];

		this.addEventListener('mouseenter', () => {
			this.classList.add('expand');
		});

		this.addEventListener('mouseleave', () => {
			this.classList.remove('expand');
		});
	}

	/**
	 * @param {HTMLElement} element The element to show and then hide.
	 * @description Shows an element for a fixed amount of time, and then hides it.
	 * The timer is paused on mouseenter and resumed on mouseleave.
	 */
	showTimedElement(element) {
		let remaining = 5000;
		let start;
		let hideTimeout;

		const hide = () => {
			element.classList.add('hide');
			element.addEventListener('transitionend', () => {
				element.remove();
				this.classList.remove('expand');
			});
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
		element.querySelector('button')?.addEventListener('click', hide);
	}

	/**
	 * @param {string} template The HTML template for the toast.
	 * @description Adds a new toast to the toaster.
	 */
	addToast(template) {
		const toastWrapper = document.createElement('div');
		toastWrapper.innerHTML = template.trim();
		const toastElement = toastWrapper.firstElementChild;
		this.shadowRoot.appendChild(toastElement);
		// this.showTimedElement(toastElement);
	}
}

customElements.define('wc-beru', WcBeru);

/**
 * @type {Toast}
 * @description The toast instance.
 */
const toast = new Toast();
toast.setToaster(document.querySelectorAll('wc-beru'));

export { toast };
