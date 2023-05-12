import '../styles/globals.css'

import LayoutHydrated from '@/components/hydrated'

import type { AppProps as NextAppProps } from 'next/app'

type PageProps = {
  event?: string | null
  page?: string | null
}

type AppProps<P = any> = {
  pageProps: P
  session: any
} & Omit<NextAppProps<P>, 'pageProps'>

export type { AppProps, PageProps }

export function App({ Component, pageProps }: AppProps<PageProps>) {
  return (
    <LayoutHydrated>
      <Component {...pageProps} />
    </LayoutHydrated>
  )
}

export default App
