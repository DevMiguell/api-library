import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#1c1c1c",
      "800": "#232323",
      "700": "#353646",
      "600": "#4b4d63",
      "500": "#616480",
      "400": "#797d9a",
      "300": "#9699b0",
      "200": "#b3b5c6",
      "100": "#d1d2dc",
      "50": "#eeeef2",
    }
  },
  fonts: {
    heading: "JetBrains Mono",
    body: "JetBrains Mono",
  },
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'gray.50',
      }
    }
  }
})