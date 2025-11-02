import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.js'),
			name: 'wc-sonner',
			fileName: (format) => `wc-sonner.${format}.js`,
			cssFileName: 'wc-sonner-styles',
		},
		rollupOptions: {
			// Evita incluir dependencias externas en el bundle
			external: [],
		},
	},
});
