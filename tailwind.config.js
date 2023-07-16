/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      ...colors,
      primary: {
          '50': '#F9F2FE',
          '100': '#EDE1F6',
          '200': '#E1CCF0',
          '300': '#C893F0',
          '400': '#A041ED',
          '500': '#5B0A9C',
          '600': '#531584',
          '700': '#45116E',
          '800': '#370E58',
          '900': '#300C4D',
      },
      neutral: {
          '50': '#F9FAFB',
          '100': '#F3F4F6',
          '150': '#FEFDFF',
          '200': '#E5E7EB',
          '250': '#EBEAEB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280',
          '600': '#4B5563',
          '700': '#374151',
          '800': '#1F2937',
          '900': '#111827',
      },
      error: {
          '50': '#FEF2F2',
          '100': '#FEE2E2',
          '200': '#FECACA',
          '300': '#FCA5A5',
          '400': '#F87171',
          '500': '#EF4444',
          '600': '#C62020',
          '700': '#B91C1C',
          '800': '#991B1B',
          '900': '#7F1D1D',
      },
      success: {
          '50': '#F0FDF4',
          '100': '#DCFCE7',
          '200': '#BBF7D0',
          '300': '#86EFAC',
          '400': '#4ADE80',
          '500': '#22C55E',
          '600': '#16A34A',
          '700': '#15803D',
          '800': '#166534',
          '900': '#14532D',
      },
      warning: {
          '50': '#FEFCE8',
          '100': '#FEF9C3',
          '200': '#FEF08A',
          '300': '#FDE047',
          '400': '#FACC15',
          '500': '#EAB308',
          '600': '#CA8A04',
          '700': '#A16207',
          '800': '#854D0E',
          '900': '#713F12',
      },
      accent: {
          '50': '#F9FAFB',
          '100': '#F3F4F6',
          '200': '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280',
          '600': '#4B5563',
          '700': '#374151',
          '800': '#1F2937',
          '900': '#111827',
      }
  },
    extend: {
      fontFamily: {
        sans: ['BR Firma Regular', ...defaultTheme.fontFamily.sans]
    },
    },
  },
  plugins: [],
}

