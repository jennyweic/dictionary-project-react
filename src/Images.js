import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    console.log(props.images, "images component");
    return (
      <div className="Images">
        {props.images.map((image, index) => {
          return <img src={image.src.original} key={index} width="350" auto />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
