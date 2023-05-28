import Layout from '@/Layout/Layout'
import '@/styles/globals.css'
import '@/styles/Styles.css'
import type { AppProps } from 'next/app'
export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
