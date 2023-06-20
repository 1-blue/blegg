/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    /** 2023/06/19 - 폰트 - by 1-blue */
    fontFamily: {
      main: ["SBAggro"],
      sub: ["PyeongChangPeace"],
    },

    extend: {
      /** 2023/06/19 - 색상 ( 남색 ) - by 1-blue */
      colors: {
        "main-50": "#eef2ff",
        "main-100": "#e0e7ff",
        "main-200": "#c7d2fe",
        "main-300": "#a5b4fc",
        "main-400": "#818cf8",
        "main-500": "#6366f1",
        "main-600": "#4f46e5",
        "main-700": "#4338ca",
        "main-800": "#3730a3",
        "main-900": "#312e81",
        "main-950": "#1e1b4b",

        "main-bg": "#080F25",
        "main-text": "#c7d2fe", // main-200
        "main-line": "#37446b",
        "main-box-bg": "#101935",
      },

      keyframes: {
        "move-left": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },

      animation: {
        "move-left": "move-left 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
};
