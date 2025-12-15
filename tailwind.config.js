module.exports = {
  theme: {
    extend: {
      
      keyframes: {
        spinY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        spinY: "spinY 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
