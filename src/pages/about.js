import React, { useState, useEffect } from "react";

export function About() {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    // const { data } = await Axios.get(
    //   "https://www.trustedhousesitters.com/house-and-pet-sitters/united-kingdom/england/london/l/1687461/",
    //   {
    //     responseType: "document",
    //   }
    // );

    const { data } = await fetch(
      "/.netlify/functions/getReviews"
    ).then((response) => response.json());

    setReviews(data);
    console.log(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      {/* {reviews.map((review) => (
        <p key={review.id}>
          {review.text}
          {review.rating}
          <img src={review.image} />
        </p>
      ))}
      blallalallalala */}
      {`${reviews.text}`}
    </div>
  );

  //   let review = document.querySelector("#feedback-review-list > div").innerText;

  //   return {
  //     review,
  //   };
}
