import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="Home: Luke Trimby - Digital Portfolio"
        description="Luke Trimby's online digital portfolio"
        canonical="https://luketrimby.com/"
        openGraph={{
          url: "https://luketrimby.com/",
        }}
      />
      <Head>
        <title>Luke Trimby - Digital Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
