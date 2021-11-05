import Head from "next/head";
import { useTheme } from "next-themes";
import React from "react";
import Layout from "../src/components/layout/layout-component";
import LandingPage from "../src/pages/landing-page/landing-page";
import Link from "next/link";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <Layout>
      <>
        <div>
          <Head>
            <title>Bharat Dussa</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <LandingPage />
        </div>
      </>
    </Layout>
  );
}
