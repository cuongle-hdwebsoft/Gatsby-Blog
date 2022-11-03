import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function BlogDetail({ params }) {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("params", params);

  useEffect(() => {
    const { id } = params;

    if (id) {
      axios
        .get(`http://localhost:3001/posts/${id}`)
        .then((result) => {
          setItem(result.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  if (loading) {
    return <div>Loading</div>;
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
