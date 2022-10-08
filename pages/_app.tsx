import '../styles/globals.css'
import type {AppProps} from 'next/app'
import "@fontsource/ubuntu/400.css";
import dynamic from "next/dynamic";
import Head from 'next/head';

// nprogress
const ProgressBar = dynamic(() => import('../components/ProgressBar/ProgressBar'), { ssr: false });

function MyApp({Component, pageProps}: AppProps) {
  return (
    <div>
      <Head>
        <title>ML Mini Project</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <ProgressBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
