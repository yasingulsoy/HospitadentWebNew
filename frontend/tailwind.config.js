/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      'Montserrat': ['Montserrat', 'Arial', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#004876',
      primary: '#0f4f78', // Ana mavi
      accent: '#0f4f78',  // Ana mavi (koyu)
      secondary: '#f5f7fa', // Açık gri
      section: '#f8fafc', // Arka plan bölümü
      gray: '#666',
      blue: '#0f4f78', // Ana mavi
      'light-bg': '#eee',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      backgroundImage: {
        'home': "url('/src/assets/home-bg.jpg')",
      }

    },
  },
  plugins: [],
}
