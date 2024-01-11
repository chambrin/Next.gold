/** @type {import('tailwindcss').Config} */

import {nextui} from "@nextui-org/react";


export default {
 content: [
  './app/**/*.{js,ts,jsx,tsx,mdx}',
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
 ],
 theme: {
  extend: {},
 },
 darkMode: "class",
 plugins: [nextui()]
};
