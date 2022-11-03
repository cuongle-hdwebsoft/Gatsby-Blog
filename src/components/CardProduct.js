import { navigate } from "gatsby";
import React from "react";

export default function CardProduct({ item }) {
  return (
    <div
      className="card pb-2 mb-3"
      onClick={() => navigate(`/blog/${item.id}`)}
    >
      <img alt="" style={{ height: 200 }} src={item.feature_image} />
      <div className="card__body pt-2 px-2">
        <div className="card__title pb-2 truncate">
          <strong>{item.title}</strong>
        </div>
        <div className="card__description mb-2">
          <strong>Date: </strong>
          {item.created_at}
        </div>
        <div className="mb-2">
          <strong>Category: </strong>
          <span className="badge text-bg-primary">{item.tags.name}</span>
        </div>
      </div>
    </div>
  );
}
