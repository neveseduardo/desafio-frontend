import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig(({ mode }) => ({
	plugins: [
		vue(),
		AutoImport({
			include: [
				/\.[tj]sx?$/,
				/\.vue$/,
				/\.vue\?vue/,
			],
			dirs: ['src'],
			dts: './src/shared/types/auto-imports.d.ts',
			eslintrc: {
				enabled: true,
				filepath: './src/shared/.eslint-globals.json',
				globalsPropValue: true,
			},
			imports: [
				'vue',
				{
					'vue-router/composables': [
						'useRouter',
						'useRoute',
					],
				},
			],
		}),
		Components({
			dts: './src/shared/types/components.d.ts',
			dirs: ['src/components'],
		}),
	],
	server: {
		port: 8080,
		host: true,
	},
	resolve: {
		alias: { '@': resolve(__dirname, './src') },
	},
}));
