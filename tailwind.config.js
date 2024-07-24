/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        source: [
          '"Source Sans 3"',
          'sans-serif',
          'ui-serif',
          'Georgia',
          'ui-sans-serif',
          'system-ui'
        ]
      },
      colors: {
        primary: '#1b3252',
        secondary: '#e0d9cf',
        'f-primary': '#030303'
      }
    }
  },
  plugins: []
};
