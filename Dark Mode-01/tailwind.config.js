/** @type {import('tailwindcss').Config} */
module.exports = {
darkMode:'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
      // Breakpoints for every screen size

        screens: {
         // These are the default breakpoints and The default breakpoints are inspired by common device resolutions:
          // 'sm': '640px',
          // 'md': '768px',
          // 'lg': '1024px',
          // 'xl': '1280px',
          // '2xl': '1536px',

         // To completely replace or override the default breakpoints
              exs:'450px',
              sm: '680px',
              md: '960px',
              lg: '1024px',
              xl: '1240px',  
          },

         // To override a single breakpoint (like lg) or we can add extra breakpoints  under the theme.extend key:  
        extend: {
         // override a single breakpoint
            lg:"1110px",
         // Add extra breakpoints 
            maxSreen:'1730px'
    },
  },
  plugins: [],
}

