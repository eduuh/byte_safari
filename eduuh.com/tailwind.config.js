/** @type {import('tailwindcss').Config} */
export const purge = [
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
];
export const darkMode = 'class';
export const theme = {
  extend: {
    fontSize: {
      headinglg: [
        '4.8rem',
        { lineHeight: '1.1' },
        { letterSpacing: '-0.02em' },
      ],
      headingmd: [
        '2.88rem',
        { lineHeight: '1.2' },
        { letterSpacing: '-0.02em' },
      ],
      headingsm: [
        '1.8rem',
        { lineHeight: '1.4' },
        { letterSpacing: '-0.02em' },
      ],
      headingxs: [
        '1.08rem',
        { lineHeight: '1.4' },
        { letterSpacing: '-0.02em' },
      ],
      subheading: ['1.44rem', { lineHeight: '1.35' }],
      body: ['16px', { lineHeight: '1.4' }, { letterSpacing: '0' }],
    },
    colors: {
      text: {
        light: 'hsl(222deg 22% 5%)',
        dark: 'hsl(210deg 10% 90%)',
      },
      background: {
        light: 'hsl(0deg 0% 100%)',
        dark: 'hsl(210deg 15% 6%)',
      },
      adaptiveWhite: {
        light: 'hsl(0deg 0% 100%)',
        dark: 'hsl(210deg 25% 92%)',
      },
      tertiary: {
        light: 'hsl(255deg 85% 30%)',
        dark: 'hsl(280deg 100% 85%)',
      },
      secondary: {
        light: 'hsl(333deg 100% 45%)',
        dark: 'hsl(333deg 100% 55%)',
      },
    },
  },
};
export const variants = {
  extend: {},
};
export const plugins = [];
