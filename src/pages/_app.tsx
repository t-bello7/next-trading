import './globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import  { ConfigProvider, theme } from 'antd';
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
    <ThemeProvider attribute="class">
        <ConfigProvider theme={{
            ...customTheme,
            // algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm, //set isDarkModel with state
            algorithm: defaultAlgorithm
        }}>
            <Component {...pageProps} />
        </ConfigProvider>
    </ThemeProvider>
    </>
)}

export default App;
  