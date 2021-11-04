import React, { useState, useEffect } from "react";
import ReviewList from "../components/reviewList/reviewList.js";
import Loader from "../components/loader";

export function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return <>{loading === false ? <ReviewList /> : <Loader />}</>;
}
