import React from "react";
import image1 from "../assets/Images/image-01.jpg";
import image2 from "../assets/Images/image-02.jpg";
import image3 from "../assets/Images/image-03.jpg";

function Tshirts() {
  return (
    <div className="tshirt">
      <Card
        image={image1}
        content1={"Most Loved Designs"}
        content2={"Customize Your T-Shirts"} 
        reverse={false}
      />
      <Card
        image={image2}
        content1={"Design of the Week"}
        content2={"Rubber Print Your T-Shirt"}
        reverse={true}
      />
      <Card
        image={image3}
        content1={"New T-Shirt Edition"}
        content2={"Customize Plain Colors"}
        reverse={false}
      />
    </div>
  );
}


const Card = ({image, content1, content2, reverse}) => {
  const div1 = <div className="images">{<img src={image}/>}</div>;
  const div2 = <div className="content1">{content1}</div>;
  const div3 = <div className="content2">{content2}</div>;
  return (
    <div>
      {reverse && (
        <>
          {div2}
          {div3}
          {div1}
        </>
      )}

      {!reverse && (
        <>
          {div1}
          {div2}
          {div3}
        </>
      )}
    </div>
  );
};

export default Tshirts;