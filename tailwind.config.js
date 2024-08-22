import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", // Añadir la ruta a los archivos de NextUI
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Opcional, según tus necesidades
  plugins: [nextui()], // Añadir el plugin de NextUI
}
