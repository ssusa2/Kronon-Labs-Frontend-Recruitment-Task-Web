import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: '767px' },
        'max-1023': { max: '1023px' }, // 1023px 이하
        tablet: { min: '768px', max: '1200px' },
        pc: { min: '1201px' },
      },
      fontFamily: {
        sans: ['BinancePlex', 'Arial', 'sans-serif'], // 기본 sans 계열 폰트에 추가
        binance: ['BinancePlex', 'sans-serif'], // 별도의 BinancePlex 폰트
      },
      fontSize: {
        base: '20px', // 기본 폰트 크기
        small: '14px', // 14px
        xsmall: '12px', // 12px
        'mobile-lg': '18px', // 모바일 18px
        'mobile-xl': '24px', // 모바일 24px
        'mobile-sm': '16px', // 모바일 16px
        'mobile-xs': '10px', // 모바일 10px
      },
      colors: {
        sell: '#F6465D',
        textSell: '#F6465D',
        sellHover: '#FF707E',
        depthSellBg: '#35141D',
        buy: '#0ECB81',
        textBuy: '#0ECB81',
        buyHover: '#32D993',
        depthBuyBg: '#102821',
        line: '#2B3139',
        outlineHover: '#6A4403',
        primary: '#FCD535',
        primaryHover: '#F0B90B',
        error: '#F6465D',
        errorBg: '#35141D',
        success: '#0ECB81',
        successBg: '#102821',
        disable: '#474D57',
        iconNormal: '#848E9C',
        textWhite: '#FFFFFF',
        textGray: '#EAECEF',
        textBlack: '#0B0E11',
        textPrimary: '#EAECEF',
        textSecondary: '#B7BDC6',
        textThird: '#848E9C',
        textDisabled: '#5E6673',
        textBrand: '#F0B90B',
        textToast: '#A37200',
        bg: '#181A20',
        bg1: '#181A20',
        bg2: '#0B0E11',
        bg3: '#2B3139',
        bg4: '#5E6673',
        bg6: '#202630',
        bg7: '#191A1F',
        popupBg: '#1E2329',
        badgeBg: '#2D2A20',
        selectedBg: '#1E2026',
        gradientBrand: 'linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%)',
        gradientPrimary:
          'linear-gradient(295.27deg, #15141A 0%, #474D57 84.52%)',
        basicBg: '#181A20',
        secondaryBg: '#0B0E11',
        input: '#2B3139',
        inputLine: '#474D57',
        cardBg: '#1E2329',
        vessel: '#1E2329',
        disableBtn: '#2B3139',
        disabledText: '#5E6673',
        tertiaryText: '#848E9C',
        primaryText: '#EAECEF',
        redGreenBgText: '#FFFFFF',
        emphasizeText: '#FF693D',
        textOnGray: '#EAECEF',
        textOnYellow: '#202630',
        liteBg1: '#202630',
        liteBg2: '#191A1F',
        btnBg: '#FCD535',
        primaryYellow: '#F0B90B',
        textLink: '#F0B90B',
        tradeBg: '#0B0E11',
        tagBg: '#474D57',
        grid: '#2B3139',
        placeholder: '#474D57',
        toastBg: '#707A8A',
        twoColorIcon: '#CACED3',
      },
    },
  },
  plugins: [],
} satisfies Config
