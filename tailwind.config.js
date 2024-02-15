
/** @type {import('tailwindcss').Config} */
export const content = ["./src/ab/src/*.{js,ts,jsx,tsx}", "./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#ff3333",
      secondary: {
        100: "#9dc3ff",
        200: "#5b9aff",
      },
      headerBg: "#FFE5D4",
    },
    fontFamily: {
      typefont: ['Poppins'],
    },
  },
};
export const plugins = [];

// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./dist/**/*.{html,js}"],
//   theme: {
//     extend: {
//       colors:{
//         primary:"#ff3333",
//         secondary:{
//           100:"#9dc3ff",
//           200:"#5b9aff"
//         }
//       },
//       fontFamily:{
//         typefont:['Poppins']
//       }
      
//     },
//   },
//   plugins: [],
// }
