// CardList.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { data } from "./Data";
import Navbar from "./Navbar";
import Main from "./Main";
import CardDetail from "./CardDetail";

const CardList = () => {
  const [data, setData] = useState([]);
  
console.log(process.env.REACT_APP_API_Host,"env variale") //gettttttt   env vraiableeeeeeeee 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "mydata");
        setData(data.slice(0, 5));
      });
  }, []);
  // console.log(data)

  // const deleted = (index) => {
  //   console.log(index);
  //   setUserdata(userdata.splice(index, 1));
  // };
  const deleted = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
  };
  return (
    <div>
      
      <Navbar />
      <Main />
      {data.map((item, index) => (
        <div className="container-fluid  ">
          <Link to={`/card/${item.id}`} state={{data:item}}>
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
          <button onClick={() => deleted(index)}>Delete Card</button>
        </div>
      ))}
    </div>
  );
};

// send data as props




export default CardList;
