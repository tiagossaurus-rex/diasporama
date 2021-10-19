import React, { useState } from "react";
import Ratings from "../ratings/ratings.js";
import Accordion from "../../components/accordion";
import "./reviewItems.css";

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
  const firstHalfText = textDescription.slice(0, 138);
  const secondHalfText = textDescription.slice(138);
  return (
    <Accordion>
      <div key={index}>
        <header>
          <Accordion.Title>{ownerName}</Accordion.Title>
          <img
            class="imageReview"
            src={fullString}
            alt={ownerName}
            title={ownerName}
          />
        </header>
        <div class="wrapper">
          <div class={isDivOpen ? "reviewItemOpen" : "reviewItemClose"}>
            <span class="reviewParagraph">{firstHalfText}</span>
            {/* <span class="reviewParagrah">{isOpen && secondHalfText}</span> */}
            {isOpen && <span>{secondHalfText}</span>}

            <Ratings review={review} />
          </div>

          {isTextLong && (
            <button class="reviewButton" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "Read Less" : "Read More"}
            </button>
          )}

          <span>
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
          </span>
        </div>
      </div>
    </Accordion>
  );
}
