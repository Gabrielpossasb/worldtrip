import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

import React, { createContext, useEffect, useState } from 'react'
import { ApiProvider } from '../context/useSelectCountry'


function MyApp({ Component, pageProps }: AppProps) {
  

  return (
    <ApiProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApiProvider>
  )
}

export default MyApp
