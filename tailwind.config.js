/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        60: "0.6",
      },
      aspectRatio: {
        "custom-82": "82 / 100",
      },
      fontFamily: {
        piximisa: ["piximisa", "sans-serif"],
        primeformRegular: ["primeformRegular", "sans-serif"],
        primeformSemiBold: ["primeformSemiBold", "sans-serif"],
        primeformBold: ["primeformBold", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        merah: "#E43337",
        kuning: "#FECF1B",
        biru: "#00B5E8",
        hijau: "#05AF6D",
        orange: "#e67325",
        "merah-gelap": "#99102F",
        "orange-gelap": "#E67325",
        "biru-gelap": "#062C43",
        "hijau-gelap": "#0F5712",
        putih: "#F2F1FB",
        hitam: "#121212",
      },
    },
  },
  plugins: [],
};
