import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardProduct from "../../components/CardProduct";
import { GET_LIST_BLOG } from "../../redux/actions";
import { MODULE_BLOG } from "../../redux/blog/reducer";

export default function BlogList() {
  const dipatch = useDispatch();
  const [page, setPage] = useState(0);
  const [limit] = useState(8);
  const blogs = useSelector((state) => state[MODULE_BLOG].blogs);

  console.log("blogs", blogs);

  useEffect(() => {
    dipatch({ type: GET_LIST_BLOG, payload: { _page: page, _limit: limit } });
  }, []);

  return (
    <div>
      <h1 className="fw-bold">Blog list</h1>

      <div className="row">
        {blogs
          ? blogs.map((blog) => {
              return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <CardProduct item={blog} key={blog.id}></CardProduct>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
