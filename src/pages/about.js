import React, { useState, useEffect } from "react";
import Reviews from "../components/reviews/reviews.js";

export function About() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/.netlify/functions/getReviews/");
      console.log(response);
      const reviews = await response.json();

      setReviews(reviews);
    };

    fetchData();
  }, []);
  console.log(reviews);
  const reviewsList = reviews.map((review, index) => {
    const stringId =
      "https://res.cloudinary.com/trustedhousesitters/image/upload/t_square_small,f_auto/v1/remote_media/media/photo";
    const fullString = stringId.concat(review[2].publicId.slice(24));
    console.log(fullString);
    const ownerName = review[1];
    const textDescription = review[0].description;
    return (
      <div key={index}>
        <h3>{ownerName}</h3>
        <img src={fullString} alt={ownerName} title={ownerName} />
        <p>{textDescription}</p>
        <Reviews review={review} />
      </div>
    );
  });

  return <div>{reviewsList}</div>;
}
