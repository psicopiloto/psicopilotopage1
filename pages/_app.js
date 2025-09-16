import "../styles/globals.css";
import CookiesBanner from "../components/CookiesBanner";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CookiesBanner />
    </>
  );
}

export default MyApp;
