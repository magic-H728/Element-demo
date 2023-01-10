import path from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import {
    presetAttributify,
    presetIcons,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'
import vuePlugin from "@vitejs/plugin-vue";

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '~/': `${pathSrc}/`,
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "~/styles/element/index.scss" as *;`,
            },
        },
    },
    plugins: [
        vue(),
        Components({
            // allow auto load markdown components under `./src/components/`
            extensions: ['vue', 'md'],
            // allow auto import and register components used in markdown
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            resolvers: [
                ElementPlusResolver({
                    importStyle: 'sass',
                }),
            ],
            dts: 'src/components.d.ts',
        }),

        // https://github.com/antfu/unocss
        // see unocss.config.ts for config
        Unocss({
            presets: [
                presetUno(),
                presetAttributify(),
                presetIcons({
                    scale: 1.2,
                    warn: true,
                }),
            ],
            transformers: [
                transformerDirectives(),
                transformerVariantGroup(),
            ]
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        })
    ],
    server: {
        port: 3000,
        host: '0.0.0.0'
    }
})
