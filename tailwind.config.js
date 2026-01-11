/** @type {import('tailwindcss').Config} */
export const darkMode = 'class';
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}", // JS/TS files ke liye scan
];
export const theme = {
  extend: {
    colors: {
      zinc: {
        950: '#060607', // Custom color add
      },
    },
  },
};
export const plugins = [];
