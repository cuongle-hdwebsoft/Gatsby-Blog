import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

export default function Index() {
  return (
    <Layout.AdminLayout>
      <h1 className="fw-bold">Dashboard</h1>
      <p>This is private page for admin</p>

      <StaticImage
        className="w-100"
        style={{ objectFit: "contain" }}
        src="../../images/undraw_happy_music_g6wc.png"
        quality={100}
        alt=""
      ></StaticImage>
    </Layout.AdminLayout>
  );
}
