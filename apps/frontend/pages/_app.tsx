/* eslint-disable @next/next/no-sync-scripts */
import App, { AppProps } from "next/app"
import Head from "next/head"
import "../styles/index.css"

export default function QuantumApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/unity/css/app.css" />
      </Head>
      <Component {...pageProps} />
      <script src="/unity/js/lib/jquery.min.js"></script>
      <script src="/unity/js/lib/owl.carousel.min.js"></script>
      <script src="/unity/js/lib/jquery.magnific-popup.min.js"></script>
      <script src="/unity/js/lib/apexcharts.min.js"></script>
      <script src="/unity/js/lib/svg4everybody.min.js"></script>
      <script src="/unity/js/app.js"></script>
      <script src="/unity/js/charts.js"></script>
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
QuantumApp.getInitialProps = async (ctx: any) => App.getInitialProps(ctx)
