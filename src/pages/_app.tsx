import './globals.css'
import { AppProps } from 'next/app';

interface CustomPageProps { // <--- your custom page props
   // your props
}

export default function App({ Component, pageProps }: AppProps<CustomPageProps>) {
    return<Component {...pageProps} />;
}
  