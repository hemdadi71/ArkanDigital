
import Layout from '@/Layout/Layout'
import { store } from '@/Redux/Store'
import '@/styles/globals.css'
import '@/styles/Styles.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
