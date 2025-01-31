import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <Header title="Meine Website" />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
