import './globals.css';
import  { ConfigProvider } from 'antd';
import { AppProps } from 'next/app';
import theme from '@/utils/themeConfig';

interface CustomPageProps { // <--- your custom page props
   // your props
}

const App = ({ Component, pageProps }: AppProps<CustomPageProps>) => (
    <ConfigProvider theme={theme}>
        <Component {...pageProps} />
    </ConfigProvider>
)

export default App;
  