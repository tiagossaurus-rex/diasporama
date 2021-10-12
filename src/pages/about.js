import React, { useState, useEffect } from "react";
import Ratings from "../components/ratings/ratings.js";
// import Spinner from "../components/spinner/spinner.js";

export function About() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8888/.netlify/functions/getReviews/"
      ).catch(function (err) {
        console.log("error in retrieving the API response", err);
      });
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
    // console.log(fullString);
    const ownerName = review[1];
    const textDescription = review[0].description;
    const ratings = review[0];
    debugger;
    return (
      <div key={index}>
        <h3>{ownerName}</h3>
        <img src={fullString} alt={ownerName} title={ownerName} />
        <p>{textDescription}</p>
        <Ratings review={ratings} />
      </div>
    );
  });

  return <div>{reviewsList}</div>;
}
