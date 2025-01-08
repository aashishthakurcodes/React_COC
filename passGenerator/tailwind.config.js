/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '-2px 1px 73px 16px rgba(242,242,242,1)', // Custom shadow
      },
    },
  plugins: [],
}

}