/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1B2559",
        inkSoft: "#5A6178",
        cream: "#FBF6E9",
        blue: "#4E63E6",
        yellow: "#FFD83D",
        mint: "#B8E6C8",
        lav: "#C9B6F2",
        peach: "#FF9E7A",
        pink: "#F7C8DD",
        deepnavy: "#0F1538",
      },
      fontFamily: {
        display: ["Grandstander", "cursive"],
        body: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(27,37,89,.08)",
        float: "0 16px 40px rgba(27,37,89,.12)",
        sticker: "3px 3px 0 rgba(27,37,89,.15)",
      },
      borderRadius: {
        pill: "999px",
      },
    },
  },
  plugins: [],
};
