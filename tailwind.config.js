module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        tealCustombg: '#23787DF7',
        tealCustombg2: '#23787d',
        tealCustom3: '#03252e',
        tealCustom4: '#23787d',
        nvdarkbg: '#092e19',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')], // Add this line
};
