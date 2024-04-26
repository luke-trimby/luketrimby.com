import React from 'react';
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import NewsFeed from '../components/NewsFeed';

export default function Home() {

  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false);

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
      <Header navbarOpen={navbarOpen} setNavbarOpen={() => setNavbarOpen(!navbarOpen)} />
      <Main />
      <NewsFeed navbarIsOpen={navbarOpen} />
      <Footer />
    </div>
  );
}
