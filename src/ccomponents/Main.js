import React from "react";
import "./Main.css"
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="container  d-flex">
        <div className="col-md-6 left ">
            <h2 className="fs-1 fw-bold my-xl-5 ">Articles for <br /><span className="text-success "> front-end devs</span></h2>
            <h3 className="cc"> on web performance, <br /> responsive web design and more</h3>
        </div>
        <div className="col-md-6 right">
            <img className="w-100 " src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGypJJpy6KoVEVGpBXMzTOoz28bilLONjl042Ae-v36YmxQ7ys" alt="" />
        </div>
      </div>
    </>
  );
}

export default Main;
