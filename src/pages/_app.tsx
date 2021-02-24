import Head from "next/head";
import { ChallengesProvider } from "../contexts/ChallengesContext";

import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Head>
        <title>React NLW4</title>
      </Head>
      <Component {...pageProps} />;
    </ChallengesProvider>
  )
}

export default MyApp;
