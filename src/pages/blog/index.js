import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../../components/CardProduct";
import Layout from "../../components/Layout";
import { GET_LIST_BLOG } from "../../redux/actions";
import { MODULE_BLOG } from "../../redux/blog/reducer";

// Chỗ này mình đang code CSR

export default function BlogList() {
  const dipatch = useDispatch();
  const [page] = useState(0);
  const [limit] = useState(8);
  const blogs = useSelector((state) => state[MODULE_BLOG].blogs);

  console.log("blogs", blogs);

  useEffect(() => {
    dipatch({ type: GET_LIST_BLOG, payload: { _page: page, _limit: limit } });
  }, [dipatch, limit, page]);

  return (
    <Layout>
      <h1 className="fw-bold">Blog list</h1>

      <div className="row">
        {blogs
          ? blogs.map((blog) => {
              return (
                <div
                  key={blog.id}
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                >
                  <CardProduct item={blog}></CardProduct>
                </div>
              );
            })
          : null}
      </div>
    </Layout>
  );
}
