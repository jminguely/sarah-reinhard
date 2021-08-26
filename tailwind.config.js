module.exports = {
  purge: {
    content: ['./src/**/*.html'],
  },
  theme: {
    colors: {
      red: '#d51317',
      white: '#ffffff',
      black: '#1d1d1b',
      grey: '#3f3f3d'
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: "100%",
        md: "100%",
        lg: "720px",
        xl: "900px"
      }
    },
    fontFamily: {
      'sans': ['"Brown"', 'sans-serif'],
      'heading': ['Ellipse', 'sans-serif'],
    },
    extend: {}
  },
  variants: {},
  plugins: [],
};
