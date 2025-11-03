import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-6 py-3 rounded-lg inline-block bg-jetspan-yellow text-jetspan-black font-semibold cursor-pointer hover:bg-yellow-400 disabled:cursor-default disabled:bg-gray-400 disabled:opacity-50 transition-all duration-200'],
    ['btn-secondary', 'px-6 py-3 rounded-lg inline-block bg-jetspan-green text-white font-semibold cursor-pointer hover:bg-green-600 disabled:cursor-default disabled:bg-gray-400 disabled:opacity-50 transition-all duration-200'],
    ['btn-outline', 'px-6 py-3 rounded-lg inline-block border-2 border-jetspan-yellow text-jetspan-yellow font-semibold cursor-pointer hover:bg-jetspan-yellow hover:text-jetspan-black transition-all duration-200'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-jetspan-yellow'],
    ['card', 'bg-white dark:bg-jetspan-gray-dark rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'],
    ['section-container', 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'],
    ['section-padding', 'py-16 md:py-24'],
  ],
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,500,600,700,800',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
    colors: {
      // Legacy color names for backward compatibility
      'jetspan-yellow': '#FBE900',
      'jetspan-green': '#61A641',
      'jetspan-gray': '#5D6973',
      'jetspan-light': '#F2F2F2',
      'jetspan-black': '#0D0D0D',
      'jetspan-gray-dark': '#2D3339',
      // Brand color palette
      'brand': {
        yellow: {
          DEFAULT: '#FBE900',
          50: '#FFFEF0',
          100: '#FFFCE0',
          200: '#FFF9C2',
          300: '#FFF6A3',
          400: '#FFF385',
          500: '#FBE900',
          600: '#DBC800',
          700: '#B99E00',
          800: '#8C7402',
          900: '#614F01',
        },
        green: {
          DEFAULT: '#61A641',
          50: '#F2F9EF',
          100: '#E3F3DE',
          200: '#C7E7BD',
          300: '#ABDB9D',
          400: '#8FCF7C',
          500: '#61A641',
          600: '#4D8534',
          700: '#3D6728',
          800: '#2E4C1F',
          900: '#1F3215',
        },
        gray: {
          DEFAULT: '#5D6973',
          50: '#F4F5F6',
          100: '#E9EBED',
          200: '#D3D7DB',
          300: '#BDC3C9',
          400: '#9DA5AD',
          500: '#5D6973',
          600: '#4A545C',
          700: '#3D454C',
          800: '#2D3339',
          900: '#1F2226',
        },
        light: '#F2F2F2',
        dark: '#0D0D0D',
      },
    },
  },
})
