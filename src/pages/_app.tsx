import './globals.css';
import  { ConfigProvider } from 'antd';
import { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '@/utils/themeConfig';

interface CustomPageProps { // <--- your custom page props
   // your props
}

const App = ({ Component, pageProps }: AppProps<CustomPageProps>) => (
    <>
    <Head>
        <title>AssetxPro</title>
    </Head>
    <ConfigProvider theme={theme}>
        <Component {...pageProps} />
    </ConfigProvider>
    </>
)

export default App;
  