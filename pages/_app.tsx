import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { Provider } from "react-redux";
import Navbar from "./component/Navbar";
import { store } from "./redux/Store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
