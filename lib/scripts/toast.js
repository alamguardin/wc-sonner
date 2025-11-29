/**
 * @class Toast
 * @description Handles the creation and display of toast notifications.
 */
export default class Toast {
	constructor() {
		/**
		 * @private
		 * @type {HTMLElement}
		 * @description The toaster element that will contain the toasts.
		 */
		this._toaster;
	}

	/**
	 * @param {HTMLElement} node The toaster element.
	 * @description Sets the toaster element that will contain the toasts.
	 */
	setToaster(node) {
		if (node) {
			this._toaster = node;
		}
	}

	/**
	 * @param {string} message The main message of the toast.
	 * @param {object} options Toast options.
	 * @param {string} [options.description] A more detailed message for the toast.
	 * @param {boolean} [options.closeButton=false] Whether to show a close button.
	 * @description Displays a toast with the given message and options.
	 */
	display(message, options = {}) {
		const toastId = Date.now();

		const toastTemplate = `
        <div class="toast" id="${toastId}">
            <div class="toast-content">
                <span class="toast-title">${message}</span>
                ${options.description ? `<span class="toast-description">${options.description}</span>` : ''}
            </div>
            ${options.closeButton ? `<button class="toast-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></button>` : ''}
        </div>
        `;

		this._toaster.addToast(toastTemplate);
	}

	/**
	 * @description Displays a success toast.
	 */
	success(message, options = {}) {
		const toastId = Date.now();
		const successIcon =
			'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM17.4571 9.45711L11 15.9142L6.79289 11.7071L8.20711 10.2929L11 13.0858L16.0429 8.04289L17.4571 9.45711Z"></path></svg>';

		const toastTemplate = `
        <div class="toast" id="${toastId}">
            <div class="toast-content">
                <span class="toast-title">${successIcon}${message}</span>
                ${options.description ? `<span class="toast-description">${options.description}</span>` : ''}
            </div>
            ${options.closeButton ? `<button class="toast-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg></button>` : ''}
        </div>
        `;

		this._toaster.addToast(toastTemplate);
	}

	/**
	 * @description Displays an error toast.
	 */
	error() {
		//
	}

	/**
	 * @description Displays a warning toast.
	 */
	warning() {
		//
	}

	/**
	 * @description Displays an info toast.
	 */
	info() {
		//
	}
}
