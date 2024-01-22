// CardDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import data from "./Data";

const CardDetail = () => {
  const { id } = useParams();
  const card = data.find((item) => item.id == id);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        margin: "16px",
        borderRadius: "8px",
      }}
    >
      <h3>{card.id}</h3>
      <h3>{card.body}</h3>
      <p>{card.userId}</p>
      <p>{card.title}</p>
    </div>
  );
};

export default CardDetail;
