import "@/styles/globals.css";
import Head from "next/head";
import { Open_Sans } from "next/font/google";
import { AnimatePresence } from "framer-motion";

import Layout from "@/components/layout/Layout";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Website, where you can see all of my portofolio projects and get to know who I am"
        />
        <title>Alex Khalramov | Frontend Developer</title>
        <link rel="icon" href="/favicon_io/favicon.ico" />
      </Head>
      <AnimatePresence mode="wait" initial={false}>
        <div
          className={`${openSans.variable} min-h-screen font-sans text-base text-gray-700  dark:bg-gray-800 dark:text-gray-100`}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </AnimatePresence>
    </>
  );
}
