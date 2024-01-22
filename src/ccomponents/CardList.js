// CardList.js
import React from "react";
import { Link } from "react-router-dom";
import data from "./Data";
import Navbar from "./Navbar";
import Main from "./Main";

const CardList = () => {
  return (
    <div>
      <Navbar />
      <Main />
      {data.map((item) => (
        <Link  to={`/card/${item.id}`}>
          <Card title={item.id} userId={item.body} />
        </Link>
      ))}
    </div>
  );
};

const Card = ({ title, userId }) => {
  return (
    <>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "16px",
          margin: "16px",
          borderRadius: "8px",
          color:"black"
        }}
      >
        <h3>{title}</h3>
        <p>{userId}</p>
      </div>
    </>
  );
};

export default CardList;
