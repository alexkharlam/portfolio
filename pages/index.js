import Home from "@/components/home/Home";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Website, where you can see all of my portofolio projects and get to know who I am"
        />
        <title>Alex Khalramov | Frontend Developer</title>
      </Head>
      <Home />
    </>
  );
}
