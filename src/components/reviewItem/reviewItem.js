import React, { useState } from "react";
import Ratings from "../ratings/ratings.js";
import Accordion from "../../components/accordion";
import Stars from "../stars/stars.js";
import "./reviewItems.css";

function averageRating(review) {
  const entries = Object.entries(review).filter((item) => {
    return typeof item[1] === "number";
  });
  let total = 0;
  for (let item of entries) {
    total = total + item[1];
  }
  return total / entries.length;
}

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
  const [isOpen, setIsOpen] = useState(false);
  const isTextLong = textDescription.length > 138;
  const isDivOpen = !isTextLong || isOpen;
  //   const firstHalfText = textDescription.slice(0, 138);
  //   const secondHalfText = textDescription.slice(138);

  return (
    <Accordion>
      <div key={index}>
        <header>
          <section>
            <img
              class="imageReview"
              src={fullString}
              alt={ownerName}
              title={ownerName}
            />
            <Stars value={averageRating(review)} />
          </section>
          <Accordion.Title>{ownerName}</Accordion.Title>
        </header>
        <div class="wrapper">
          {/* <div class={isDivOpen ? "reviewItemOpen" : "reviewItemClose"}>
            <span class="reviewParagraph">{firstHalfText}</span>

            {isOpen && <span>{secondHalfText}</span>} */}
          <div class={isDivOpen ? "reviewItemOpen" : "reviewItemClose"}>
            {textDescription}
            <Ratings review={review} />
          </div>

          <button class="reviewButton" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "Read Less" : "Read More"}
          </button>

          <div class="reviewDates">
            {location} . {country} .{" "}
            {new Date(startDate).toLocaleDateString("en-en", {
              month: "short",
              day: "2-digit",
            })}{" "}
            <span> - </span>
            {new Date(endDate)
              .toLocaleDateString("en-en", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })
              .replace(",", "")}
          </div>
        </div>
      </div>
    </Accordion>
  );
}
