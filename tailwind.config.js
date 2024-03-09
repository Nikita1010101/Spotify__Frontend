/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'firstAlbumColor': '#7770ff',
        'secondAlbumColor': '#234eff',
        'thirdAlbumColor': '#fd9c02',
        'fourthAlbumColor': '#fd6835',
      },
      backgroundImage: {
        'imagePrimary': "url('@/assets/img/background.jpg')",
        'imageSecondary': "url('@/assets/img/background2.jpg')",
        'imageTertiary': "url('@/assets/img/background3.jpg')"
      }
    },
  },
  plugins: [],
}

