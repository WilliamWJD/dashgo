import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    // resetCSS, limpa todas as estilizações padrões de um elemento, por padrão ele é true
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
