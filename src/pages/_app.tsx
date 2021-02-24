import Head from "next/head";
import "../styles/global.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>React NLW4</title>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
