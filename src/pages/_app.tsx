import Layout from '@/Components/Layout/Layout'
import { store } from '@/Redux/Store'
import '@/styles/globals.css'
import '@/styles/Styles.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createTheme, ThemeProvider } from '@mui/material'
const queryClient = new QueryClient()
const theme = createTheme({
  direction: 'rtl',
})
export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
