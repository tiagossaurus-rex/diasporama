import React from "react";
import Ratings from "../ratings/ratings.js";

export default function ReviewItem({
  ownerName,
  textDescription,
  review,
  fullString,
  index,
}) {
  return (
    // <div key={index}>
    <div key={index}>
      <h3>{ownerName}</h3>
      <img src={fullString} alt={ownerName} title={ownerName} />
      <p>{textDescription}</p>
      <Ratings review={review} />
    </div>
  );
}
