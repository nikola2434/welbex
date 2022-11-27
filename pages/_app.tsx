import "./../styles/global.css";
import type { AppProps } from "next/app";
import MainProvider from "../app/Providers/MainProvider/MainProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
}
