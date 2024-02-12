// CardList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import CardDetail from "./CardDetail";

const CardList = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false)



  useEffect(() => {
    setLoader(true)
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data.slice(0,10));
        setLoader(false)
      });
  }, []);

  const handleDelete = (index) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this card?");
    console.log(isConfirmed)
    if (isConfirmed) {
      setData((prevData) => prevData.filter((_, i) => i !== index));
    }
  };
if (loader) {
  return <h1>loading</h1>
}
  return (
    <div>
      <Navbar />
      <Main />
      {data.map((item, index) => (
        <div key={index} className="container-fluid">
          <Link to={`/card/${item.id}`} state={{ data: item }}>
            <div
              style={{
                border: "1px solid #ddd",
                padding: "16px",
                margin: "16px",
                borderRadius: "8px",
                color: "black",
              }}
            >
              <h3>{item.id}</h3>
              <p>{item.title}</p>
            </div>
          </Link>
          <Link to={`/userForm`}>
            <button>
            Add using Form
            </button>
          </Link>
          <button onClick={() => handleDelete(index)}>Delete Card</button>
        </div>
      ))}
    </div>
  );
};


export default CardList;
