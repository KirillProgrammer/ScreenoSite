import {defineConfig} from 'vite';
import autoprefixer from 'autoprefixer'

export default defineConfig({
    root: 'src',
    server: {
        open: '/'
    },
    build: {
        outDir: '../dist'
    },
    css: {
        postcss:{
            plugins:[
              autoprefixer
            ]
        }
    }
});