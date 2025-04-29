// tailwind.config.js
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Share Tech Mono', 'monospace'],
        fancy: ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
};