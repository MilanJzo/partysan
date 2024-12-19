/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
        fontFamily: {
            'sans': ['Big Shoulders Text', 'sans-serif'],
            'serif': ['El Messiri', 'serif']
        },
    },
  },
  plugins: [],
}

