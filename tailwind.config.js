/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        darkBlue: '#171420',
        btnColor: '#5F65F4',
        lightPurple: '#9694E7',
        lightBlue: '#2A4AF4',
        second: '#1F1D2C',
      },
      backgroundImage: {
        'logo-pattern': "url('https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png')",
        'student': "url('/src/assets/imgs/cheerful-african-american-male-student-using-lapto-47WVYNJ-1-800x859.png')",
        'studentAbout': "url('/src/assets/imgs/student2.png')",
        'map': "url('/src/assets/imgs/map.png')",
        'customers': "url('/src/assets/imgs/customer.png')",
        'studentTestimonials': "url('/src/assets/imgs/student-testimonal.png')",
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      },
      colors: {
        lightBlue: '#2A4AF4',
        lightGray: '#9B9B9B',
        darkBlue: '#171420',
        lightPurple: '#9694E7',
      }
    },
  },
  plugins: [],
}
