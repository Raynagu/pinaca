module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Covered: ['Covered By Your Grace', 'cursive'],
      },
      dropShadow: {
        '3xl': ['0 20px 13px rgba(0, 0, 0 , 0.11)',
          '0 8px 5px rgba(0, 0, 0, 0.18)'],
      }
    },
  },
  plugins: [],
};
