import './style.css';
import { toast } from '../lib';

const btn = document.querySelector('#defaultButton');

let count = 1;
btn.addEventListener('click', () => {
	toast.info(`This is the toast #${count} from wc-sonner`, {
		description: 'This is a toast description',
		closeButton: true,
	});

	count++;
});
