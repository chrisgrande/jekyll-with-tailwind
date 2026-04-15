const colors = require("tailwindcss/colors");

module.exports = {
  // v4 does not auto-pick up JS configs; css/main.css loads this via @config.
  // Scan typical Jekyll sources so classes in layouts/includes/collections are not purged.
  content: [
    "./**/*.{html,md}",
    "./**/*.{liquid,markdown,mdx}",
  ],
  theme: {
    fontFamily: {
      trajan: ["trajan-pro", "sans-serif"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundImage: {
        hero: "url('/imgs/tot21_bk_hero.jpg')",
        swirl: "url('/imgs/swirl.png')",
        halloweenbtn: "url('/imgs/halloween_btn_bg.png')",
        index: "url('/imgs/tot21_index_hero.jpg')",
      },
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
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
