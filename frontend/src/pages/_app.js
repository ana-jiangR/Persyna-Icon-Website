import React from "react";
import Script from "next/script";
import Head from "next/head";
import LoadingScreen from "../components/Loading-Screen/loading-screen";
import "../styles/globals.css";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/scrollToTop";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Persyna Icon 人格图鉴社</title>
        <meta
          name="description"
          content="Persyna Icon人格图鉴社（简称PSN），是由一群上海国际高中生于2023年初所成立的人格类型学组织团体。PSN的使命是通过人格类型学领域的知识理论传播，以帮助更多个体挖掘自身天赋与热情、进行深刻的内在探索;秉持着个体人格价值无法被取代、无法被定义、无法被量化的理念，鼓励所有独特个体活出自己的人生价值。"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <Cursor />
      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />

      <Script id="wow" src="/assets/js/wow.min.js"></Script>
      <Script
        id="splitting"
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>

      <Script
        id="simpleParallax"
        src="/assets/js/simpleParallax.min.js"
      ></Script>
      <Script id="isotope" src="/assets/js/isotope.pkgd.min.js"></Script>

      <Script src="/assets/js/main.js" id="init" strategy="lazyOnload"></Script>
    </>
  );
}

export default MyApp;
