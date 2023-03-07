import Home from "@/components/home/Home";
import TransitionMotion from "@/components/ui/TransitionMotion";
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <TransitionMotion>
        <Home />
      </TransitionMotion>
    </>
  );
}
