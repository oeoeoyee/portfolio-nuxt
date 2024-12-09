/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './composables/**/*.{vue,js,ts}',
    './plugins/**/*.{vue,js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
  ],
  theme: {
    extend: {
      fontSize: {
        'p': '20px',
        // 'p': ['20px', {
        //   lineHeight: '1rem'
        // }],
        '2.5xl': ['28px', '34px'],
        '3.5xl': ['32px', '38px']
      },
      lineHeight: {
        '11': '2.75rem', /* 44px */
        '12': '3rem', /* 48px */
        '13': '3.25rem', /* 52px */
        '14': '3.5rem', /* 56px */
        '15': '3.75rem', /* 60px */
        '16': '4rem', /* 64px */
      },
      colors: {
        myColor: {
          mainGreen: '#6F9385',
          ButtonGreen: '#A5D0CB',
          hoverGreen: '#95BAB6',
          ButtonYellow: '#FEEDAB',
          hoverYellow: '#EFE0A2',
          borderGery: '#808080',
          darkMidGreen: '#4d7d78',
          darkGreen: '#365955',
        }
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      }
    },
  },
  plugins: [],
}

