import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                slideRight: {
                    from: { left: '0px' },
                    to: { left: '14.5px' },
                },
                slideLeftBack: {
                    from: { left: '14.5px' },
                    to: { left: '0px' },
                },
            },
        },
        animation: {
            actSlideRight: 'slideRight 0.5s forwards',
            actSlideLeftBack: 'slideLeftBack 0.5s forwards',
        },
    },
    darkMode: 'class',
}
export default config
