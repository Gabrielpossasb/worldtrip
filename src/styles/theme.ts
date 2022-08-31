import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
   styles: {
      global: {
         body: {
            bg: 'whiteAlfa.900',
            color: 'gray.50',
         }
      }
   },
   fonts: {
      body: "Poppins",
   }
})