import React, { useState } from "react";
import ReviewList from "../components/reviewList/reviewList.js";
import Loader from "../components/loader";

export function About() {
  const [loading, setLoading] = useState(true);
  function fetchCompleted() {
    setLoading(false);
  }

  return (
    <>
      <ReviewList onFetchCompleted={fetchCompleted} />
      {loading && <Loader />}
    </>
  );
}
