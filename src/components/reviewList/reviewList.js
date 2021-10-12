import React, { useState, useEffect } from "react";
import ReviewItem from "../reviewItem/reviewItem.js";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/.netlify/functions/getReviews/").catch(
        function (err) {
          console.log("error in retrieving the API response", err);
        }
      );
      const reviews = await response.json();

      setReviews(reviews);
    };

    fetchData();
  }, []);
  const reviewsList = reviews.map((review, index) => {
    // return <div>Gupppppp</div>;
    const stringId =
      "https://res.cloudinary.com/trustedhousesitters/image/upload/t_square_small,f_auto/v1/remote_media/media/photo";
    const fullString = stringId.concat(review[2].publicId.slice(24));
    // //  console.log(fullString);
    const ownerName = review[1];
    const textDescription = review[0].description;
    const ratings = review[0];
    return (
      <ReviewItem
        key={index}
        ownerName={ownerName}
        textDescription={textDescription}
        review={ratings}
        fullString={fullString}
      />
    );
  });

  return <div>{reviewsList}</div>;
}
