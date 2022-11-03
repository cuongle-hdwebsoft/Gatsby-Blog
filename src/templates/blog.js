import React from "react";
import Layout from "../components/Layout";

export default function BlogDetail({ pageContext: { item } }) {
  console.log("item", item);

  if (!item) {
    return null;
  }

  return (
    <Layout>
      <div id="blog-details">
        <img
          style={{
            maxWidth: 300,
            display: "block",
            margin: "auto",
            marginBottom: 5,
          }}
          src={item.feature_image}
          alt=""
        />
        <h1
          style={{ maxWidth: 400, textAlign: "center", margin: "auto" }}
          className="fw-bold mb-4"
        >
          {item.title}
        </h1>

        <div className="mb-2">
          <strong>Intro: </strong>
          {item.excerpt}
        </div>
        <div className="mb-2">
          <strong>Author</strong> {item.authors}
        </div>

        <div dangerouslySetInnerHTML={{ __html: item.html }}></div>
      </div>
    </Layout>
  );
}
