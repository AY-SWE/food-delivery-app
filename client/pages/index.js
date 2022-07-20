import Head from "next/head";
import Layout from "../components/Layout";
import Homepage from "../components/Homepage";
import css from "../styles/Home.module.css";

export default function Home() {    
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>NOODLES EXPRESS</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        {/* body */}
        <main>
          <Homepage/>    
        </main>
      </div>
    </Layout>
  );
}
