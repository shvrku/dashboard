/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        MidnightSlate : "#242320",
        FrostyGrey : "#edededb4",
        FrostySilver : "#ededed",
        TranquilTaupe : "#e4ddd4",
        bText: "#171717",
        Nav : "#1F1F1F",
        Cards : "#111",
        Border : "#333",
        List : "#090909",
        
      },
      fontFamily: {
        AHSM: ['AHSM'],
        ASHRI: ['AHSRI'],
      },
    }
  },
  plugins: []
};