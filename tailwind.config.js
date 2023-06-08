/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'rotom': "url('/src/img/rotom-bg-img.jpg')",
      }
    },
  },
  plugins: [],
}

