import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    console.log(props.images, "images component");
    return (
      <div className="Images row">
        {props.images.map((image, index) => {
          return (
            <div className="col-4 img-fluid">
              <img src={image.src.original} key={index} alt={""} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
