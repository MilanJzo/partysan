/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
        fontFamily: {
            'sans': ['Karla', 'sans-serif'],
            'serif': ['El Messiri', 'serif']
        },
        animation: {
        typewriter: "typewriter 2s steps(11) forwards"
        },
        keyframes: {
            typewriter: {
            to: {
                left: "100%"
            }
            }
        },
    },
  },
  plugins: [],
}

