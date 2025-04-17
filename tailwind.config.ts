import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                neue: ['Neue', 'sans-serif'],
            },
            keyframes: {
                'square-in-center': {
                    '0%': { clipPath: 'inset(100% 100% 100% 100%)' },
                    '100%': { clipPath: 'inset(0 0 0 0)' },
                }
            },
            animation: {
                'square-in-center': 'square-in-center 2.5s cubic-bezier(0.25, 1, 0.3, 1) both',
            }
        }
    },
    plugins: []
}

export default config
