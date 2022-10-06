import '../styles/globals.css'
import type {AppProps} from 'next/app'
import "@fontsource/ubuntu/400.css";
import dynamic from "next/dynamic";

// nprogress
const ProgressBar = dynamic(() => import('../components/ProgressBar/ProgressBar'), { ssr: false });

function MyApp({Component, pageProps}: AppProps) {
  return (
    <div>
      <ProgressBar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
