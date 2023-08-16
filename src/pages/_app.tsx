import './globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import  { ConfigProvider, theme } from 'antd';
import { SessionProvider } from "next-auth/react"
import customTheme from '@/utils/themeConfig';
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { WebSocketContextProvider } from '@/hooks/state';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
    const { defaultAlgorithm } = theme;
    const getLayout = Component.getLayout ?? ((page) => page)
    return (
    <SessionProvider session={pageProps.session}>
        <Head>
            <title>AssetxPro</title>
        </Head>
        <ThemeProvider attribute="class">
                <ConfigProvider theme={{
                    ...customTheme,
                    algorithm: defaultAlgorithm
                }}>
                    {getLayout(<Component {...pageProps} />)}
                </ConfigProvider>
        </ThemeProvider>
    </SessionProvider>

)}

export default App;
  