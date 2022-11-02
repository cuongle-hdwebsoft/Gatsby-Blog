import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Seo from "../components/Seo";

export default function Index() {
  return (
    <>
      <h1 className="mb-4 fw-bold">Homepage</h1>
      <StaticImage
        src="https://images.unsplash.com/photo-1667309772953-3ef528f5858d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        style={{ height: 400 }}
        className="mb-2 d-block mx-auto"
      ></StaticImage>

      <div className="text-center">
        <span>
          This is demo gatsby blog. We are intended to be show and demonstrate
          how to use Gatsby feature and its utils. Please check git repo if you
          have any question.
        </span>
        <p>
          Email: <strong>cuong.leminhcuong@hdwebsoft.dev</strong>
        </p>
      </div>
      <h2 className="fw-bold">Features</h2>
      <ul className="list-style-none ms-0 ps-0">
        <li>
          <i className="fa-solid fa-check me-2 d-inline-block text-success"></i>
          Show list post
        </li>
        <li>
          <i className="fa-solid fa-check me-2 d-inline-block text-success"></i>
          Blog detail
        </li>
        <li>
          <i className="fa-solid fa-check me-2 d-inline-block text-success"></i>
          Redux
        </li>
        <li>
          <i className="fa-solid fa-check me-2 d-inline-block text-success"></i>
          Redux saga
        </li>
      </ul>
    </>
  );
}

export const Head = () => {
  return <Seo pageName="Homepage"></Seo>;
};
