import { useTheme } from "next-themes";
import Head from "next/head";
import React, { lazy, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../src/components/layout/layout-component";
import LandingPage from "../src/pages/landing-page/landing-page";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>();

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  return (
    <>
      {mounted ? (
        <Layout>
          <div className="min-h-screen">
            <Head>
              <title>Bharat Dussa</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <LandingPage />
          </div>
        </Layout>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
