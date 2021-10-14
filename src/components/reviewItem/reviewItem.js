import React from "react";
import Ratings from "../ratings/ratings.js";

export default function ReviewItem({
  ownerName,
  textDescription,
  review,
  fullString,
  index,
  location,
  country,
  startDate,
  endDate,
}) {
  return (
    <div key={index}>
      <h3>{ownerName}</h3>
      <img src={fullString} alt={ownerName} title={ownerName} />
      <p>{textDescription}</p>
      <Ratings review={review} />
      <p>
        {location}, {country} .{" "}
        {new Date(startDate).toLocaleDateString("en-en", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}{" "}
        -
        {new Date(endDate).toLocaleDateString("en-en", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <p></p>
    </div>
  );
}
