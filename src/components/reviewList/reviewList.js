import React, { useState, useEffect } from "react";
import ReviewItem from "../reviewItem/reviewItem.js";

export default function ReviewList() {
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
  const reviewsList = reviews.map((review, index) => {
    console.log(review);
    const stringId =
      "https://res.cloudinary.com/trustedhousesitters/image/upload/t_square_small,f_auto/v1/remote_media/media/photo";
    const fullString = stringId.concat(review.photo.publicId.slice(24));

    return (
      <ReviewItem
        key={index}
        ownerName={review.ownerName}
        textDescription={review.description}
        review={review.review}
        location={review.location}
        country={review.country}
        fullString={fullString}
        startDate={review.startDate}
        endDate={review.endDate}
      />
    );
  });

  return <div>{reviewsList}</div>;
}
