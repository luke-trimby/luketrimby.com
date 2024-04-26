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
    <div className="">
      <NextSeo
        title="Home: Lukas Tech"
        description="Lukas Tech Ltd - digital tech solutions"
        canonical="https://lukas-tech.com"
        openGraph={{
          url: "https://lukas-tech.com",
        }}
      />
      <Head>
        <title>Digital Tech Solutions - Lukas Tech Ltd</title>
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <Header navbarOpen={navbarOpen} setNavbarOpen={() => setNavbarOpen(!navbarOpen)} />
      <Main />
      <NewsFeed navbarIsOpen={navbarOpen} />
      <Footer />
    </div>
  );
}
