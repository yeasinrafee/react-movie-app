/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7df2b4",

          secondary: "#09a53b",

          accent: "#cac5f9",

          neutral: "#1A1924",

          "base-100": "#FCFCFD",

          info: "#4169D8",

          success: "#1F986E",

          warning: "#FCAE4F",

          error: "#E77480",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
