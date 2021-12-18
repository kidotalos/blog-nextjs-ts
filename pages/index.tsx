import type { NextPage } from "next";
import React from "react";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="home">
      <p className="text-4xl">Hello takuya</p>
    </Layout>
  );
};

export default Home;
