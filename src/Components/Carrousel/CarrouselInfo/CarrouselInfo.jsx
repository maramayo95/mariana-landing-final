import React from "react";
import "../Carrousel.css";
const CarrouselInfo = ({arr}) => {
  return (
    <>
      <img src={arr.img} alt="Image 1" className="img-splide" />
      <div className="text-flex">
        <h1>{arr.text}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione
          laborum voluptatem voluptate veritatis tenetur vero, sed, perferendis
          numquam suscipit sapiente accusamus ipsam magni aliquam odio
          recusandae quas in eos.
        </p>
      </div>
    </>
  );
};

export default CarrouselInfo;
