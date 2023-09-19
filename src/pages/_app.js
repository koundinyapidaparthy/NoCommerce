import { SessionProvider } from "next-auth/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import "../styles/globals.css";

config.autoAddCss = false;
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider
      session={session}
      refetchInterval={5 * 60}
      refetchOnWindowFocus={true}
    >
      <Head>
        <link rel="shortcut icon" href="/NH.png" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
