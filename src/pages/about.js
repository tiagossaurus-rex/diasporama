import React, { useState, useEffect } from "react";
import ReviewList from "../components/reviewList/reviewList.js";
import Loader from "../components/loader";

export function About() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8888/.netlify/functions/getReviews/"
      ).catch(function (err) {
        console.log("error in retrieving the API response", err);
      });
      const reviews = await response.json();
      onFetchCompleted();
      setReviews(reviews);
    };

    fetchData();
  }, [setReviews, onFetchCompleted]);

  function onFetchCompleted() {
    setLoading(false);
  }

  return (
    <>
      {!loading && <h1>Reviews ({reviews.length})</h1>}
      <ReviewList onFetchCompleted={onFetchCompleted} reviews={reviews} />
      {loading && <Loader />}
    </>
  );
}
