import Header from "../header";
import Footer from "../footer";
import Head from "next/head";
export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Blog Web</title>
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
