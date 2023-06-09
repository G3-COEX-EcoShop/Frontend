import type { AppProps } from 'next/app'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { SWRConfig } from 'swr';
import '@/styles/globals.css'
import { lightTheme } from '@/themes'
import { CartProvider, RoleProvider } from '@/context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 20000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <ThemeProvider theme={lightTheme}>
        <CartProvider>
          <RoleProvider>

            <CssBaseline />
            <Component {...pageProps} />
          </RoleProvider>
        </CartProvider>
      </ThemeProvider>
    </SWRConfig >
  )
}
