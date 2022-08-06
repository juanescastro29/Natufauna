import React from "react";
import Card from "./Card";

import image1 from "../assets/ben.png";
import image2 from '../assets/cafe.png'
import image3 from '../assets/sopa.png'

const cards = [
  {
    
    id: 1,
    title: "Fazt Web",
    image: image1,
    url: "https://faztweb.com",
  },
  {
    id: 2,
    title: "Fazt Blog",
    image: image2,
    url: "https://blog.faztweb.com",
  },
  {
    id: 3,
    title: "Fazt Youtube",
    image: image3,
    url: "https://youtube.com/fazttech",
  },
];

function Cards() {
  return (
    <div className="container p-4">
      <div className="row align-items-center">
        {cards.map(({ title, image, url, id }) => (
          <div className="col" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;