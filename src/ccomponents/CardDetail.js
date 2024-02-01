// CardDetail.js
import React from "react";
import { useLocation, useParams } from "react-router-dom";
// import {data} from "./Data";

const CardDetail = () => {
  const location=useLocation()
  const myData=location.state.data
console.log(location,"data---")
  // const { id } = useParams();
  // const card = data.find((item) => item.id == id);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        margin: "16px",
        borderRadius: "8px",
      }}
    >
      <h3>{myData.id}</h3>
      <h3>{myData.body}</h3>
      <p>{myData.userId}</p>
      <p>{myData.title}</p>
    </div>
  );
};

export default CardDetail;
