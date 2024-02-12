// CardList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
import CardDetail from "./CardDetail";

const CardList = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [start, setStart] = useState(0);
  const [limit, setLimit] = useState(10);

  const fetchData = () => {
    setLoader(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [start, limit]);

  const handleDelete = (index) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this card?");
    if (isConfirmed) {
      setData((prevData) => prevData.filter((_, i) => i !== index));
    }
  };

  const handleNextPage = () => {
    setStart(start + limit);
  };

  const handlePrevPage = () => {
    if (start >= limit) {
      setStart(start - limit);
    }
  };

  if (loader) {
    return <h1>Loading...</h1>;
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
            <button>Add using Form</button>
          </Link>
          <button onClick={() => handleDelete(index)}>Delete Card</button>
        </div>
      ))}
      <div>
        <button onClick={handlePrevPage} disabled={start === 0}>
          Previous Page
        </button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default CardList;
