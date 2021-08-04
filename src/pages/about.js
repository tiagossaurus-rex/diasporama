import React, { useState, useEffect } from "react";
import Axios from "axios";
import Cheerio from "cheerio";

export function About() {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    // const { data } = await Axios.get(
    //   "https://www.trustedhousesitters.com/house-and-pet-sitters/united-kingdom/england/london/l/1687461/",
    //   {
    //     responseType: "document",
    //   }
    // );

    const { data } = await Axios.get(
      "https://affectionate-khorana-fac900.netlify.app/",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );

    setReviews(data);
    console.log(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      {reviews.map((review) => (
        <p key={review.id}>
          {review.text}
          {review.rating}
          <img src={review.image} />
        </p>
      ))}
      blallalallalala
    </div>
  );

  //   let review = document.querySelector("#feedback-review-list > div").innerText;

  //   return {
  //     review,
  //   };
}
