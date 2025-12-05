import * as ico from './icons';

/**
 * @class Toast
 * @description Handles the creation and display of toast notifications.
 */
export default class Toast {
	constructor() {
		/**
		 * @private
		 * @type {NodeList}
		 * @description The toaster element that will contain the toasts.
		 */
		this._toaster;
	}

	/**
	 * @param {NodeList} arr The toaster elements.
	 * @description Sets the toaster element that will contain the toasts.
	 */
	setToaster(arr) {
		if (arr.length > 0) {
			this._toaster = arr;
		} else {
			throw new Error('No wc-beru instances have been created');
		}
	}

	/**
	 * @private
	 * @param {object} data The data for the toast.
	 * @description Renders a toast notification with the given data.
	 */
	#renderToast(data) {
		let toastIcon = '';

		switch (data.type) {
			case 'success':
				toastIcon = ico.successIcon();
				break;
			case 'error':
				toastIcon = ico.errorIcon();
				break;
			case 'warning':
				toastIcon = ico.warningIcon();
				break;
			case 'info':
				toastIcon = ico.infoIcon();
				break;
		}

		const toastTemplate = `
        <div class="toast ${data.type}" id="${data.id}">
            <div class="toast-content">
                <span class="toast-title">${toastIcon}${data.message}</span>
                ${data.description ? `<span class="toast-description">${data.description}</span>` : ''}
            </div>
            ${data.closeButton ? `<button class="toast-close">${ico.closeIcon()}</button>` : ''}
        </div>
        `;

		if (!data.beruId) {
			this._toaster[0].addToast(toastTemplate);
		}

		if (data.beruId) {
			const seletedToaster = Array.from(this._toaster).find((element) => {
				return element.id === data.beruId;
			});

			if (seletedToaster) {
				seletedToaster.addToast(toastTemplate);
			} else {
				throw new Error(`Not finding wc-beru with ${data.beruId} id`);
			}
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
		const toastData = {
			id: Date.now(),
			type: '',
			message: message,
			description: options.description ?? '',
			closeButton: options.closeButton ?? false,
			beruId: options.beruId ?? undefined,
		};

		this.#renderToast(toastData);
	}

	/**
	 * @param {string} message The main message of the toast.
	 * @param {object} options Toast options.
	 * @description Displays a success toast.
	 */
	success(message, options = {}) {
		const toastData = {
			id: Date.now(),
			type: 'success',
			message: message,
			description: options.description ?? '',
			closeButton: options.closeButton ?? false,
			beruId: options.beruId ?? undefined,
		};

		this.#renderToast(toastData);
	}

	/**
	 * @param {string} message The main message of the toast.
	 * @param {object} options Toast options.
	 * @description Displays an error toast.
	 */
	error(message, options = {}) {
		const toastData = {
			id: Date.now(),
			type: 'error',
			message: message,
			description: options.description ?? '',
			closeButton: options.closeButton ?? false,
			beruId: options.beruId ?? undefined,
		};

		this.#renderToast(toastData);
	}

	/**
	 * @param {string} message The main message of the toast.
	 * @param {object} options Toast options.
	 * @description Displays a warning toast.
	 */
	warning(message, options = {}) {
		const toastData = {
			id: Date.now(),
			type: 'warning',
			message: message,
			description: options.description ?? '',
			closeButton: options.closeButton ?? false,
			beruId: options.beruId ?? undefined,
		};

		this.#renderToast(toastData);
	}

	/**
	 * @param {string} message The main message of the toast.
	 * @param {object} options Toast options.
	 * @description Displays an info toast.
	 */
	info(message, options = {}) {
		const toastData = {
			id: Date.now(),
			type: 'info',
			message: message,
			description: options.description ?? '',
			closeButton: options.closeButton ?? false,
			beruId: options.beruId ?? undefined,
		};

		this.#renderToast(toastData);
	}
}
