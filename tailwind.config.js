const colors = require("tailwindcss/colors");

module.exports = {
  content: ['./**/*.html'],
  theme: {
    fontFamily: {
      trajan: ["trajan-pro", "sans-serif"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundImage: (theme) => ({
        hero: "url('/imgs/tot21_bk_hero.jpg')",
        swirl: "url('/imgs/swirl.png')",
        halloweenbtn: "url('/imgs/halloween_btn_bg.png')",
        index: "url('/imgs/tot21_index_hero.jpg')",
      }),
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.neutral,
      black: colors.black,
      white: colors.white,
      primary: colors.orange,
      indigo: colors.indigo,
      totblue: {
        DEFAULT: "#50ced4",
      },
      totpink: {
        DEFAULT: "#8d005d",
      },
    },
  },
  variants: {
    extend: {},
    variants: {
      animation: ['motion-safe']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
