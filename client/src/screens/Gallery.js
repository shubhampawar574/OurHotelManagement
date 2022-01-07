import React from "react";

import src1 from "../resources/gallery_hd_1.jpg";
import src2 from "../resources/gallery_1.jpg";
import src3 from "../resources/gallery_2.jpg";
import src4 from "../resources/gallery_3.jpg";
import src5 from "../resources/gallery_4.jpg";
import src6 from "../resources/gallery_5.jpg";
import src7 from "../resources/gallery_2_hd.jpg";
import src8 from "../resources/gallery_hd_3.jpg";
import src9 from "../resources/gallery_hd_4.jpg";
import "./Gallery.css";
function Gallery() {
  return (
    <div className="container-fluid about-container" id="gallery">
      <h1 className="text-center">Gallery</h1>
      <div className="row">
        <div className=" col-sm-4">
          <img
            src={src1}
            className="about-images img-fluid"
            alt="about images"
          />
        </div>
        <div className=" col-sm-4">
          <img
            src={src2}
            className="about-images img-fluid"
            alt="about images"
          />
        </div>
        <div className=" col-sm-4">
          <img
            src={src3}
            className="about-images img-fluid"
            alt="about images"
          />
        </div>
      </div>

      <div className="row">
        <div className=" col-sm-4">
          <img
            src={src4}
            className="about-images img-fluid"
            alt="about images"
          />
        </div>
        <div className=" col-sm-4">
          <img
            src={src5}
            className="about-images img-fluid"
            alt="about images"
          />
        </div>
        <div className=" col-sm-4">
          <img
            src={src6}
            className="about-images img-fluid"
            alt="about images"
          />
        </div>
      </div>

      <div className="row">
        <div className=" col-sm-4">
          <img
            src={src7}
            className="about-images img-fluid"
            alt="about images"
          />
        </div>
        <div className=" col-sm-4">
          <img
            src={src8}
            className="about-images img-fluid"
            alt="about images"
          />
        </div>
        <div className=" col-sm-4">
          <img
            src={src9}
            className="about-images img-fluid"
            alt="about images"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
