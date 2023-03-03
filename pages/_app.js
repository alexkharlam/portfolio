import "@/styles/globals.css";
import { Open_Sans } from "next/font/google";

import Layout from "@/components/layout/Layout";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-openSans",
});

export default function App({ Component, pageProps }) {
  return (
    <div
      className={`${openSans.variable} min-h-screen font-sans text-base text-gray-700 transition-colors duration-500 dark:bg-gray-800 dark:text-gray-100`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
