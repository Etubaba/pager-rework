import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        PINK_01: '#e8238d',

        TEXT_01: '#1d1d1d',
        BLACK_01: '#101923',
      },
      fontSize: {
        TitleSize: '2.5rem',
      },
      margin: {
        vertical_space_01: '2rem',
      },
    },
  },
  plugins: [],
};
export default config;
