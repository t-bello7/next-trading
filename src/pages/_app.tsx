import './globals.css';
import  { ConfigProvider, theme } from 'antd';
import { AppProps } from 'next/app';
import Head from 'next/head';
import customTheme from '@/utils/themeConfig';

interface CustomPageProps { // <--- your custom page props
   // your props
}

const App = ({ Component, pageProps }: AppProps<CustomPageProps>) => {
    const { defaultAlgorithm, darkAlgorithm } = theme;
    return (
    <>
    <Head>
        <title>AssetxPro</title>
    </Head>
    <ConfigProvider theme={{
        ...customTheme,
        // algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm, //set isDarkModel with state
        algorithm: defaultAlgorithm
    }}>
        <Component {...pageProps} />
    </ConfigProvider>
    </>
)}

export default App;
  