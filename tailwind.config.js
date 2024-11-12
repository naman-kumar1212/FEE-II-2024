/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        card: 'var(--card-bg)',
        border: 'var(--border-color)',
      },
      boxShadow: {
        card: 'var(--card-shadow)',
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
      },
      transitionProperty: {
        'all': 'var(--transition)',
      },
    },
  },
  plugins: [],
};