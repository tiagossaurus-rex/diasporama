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
      <section key={index}>
        <header>
          <section>
            <div className="section-image">
              <img
                className="imageReview"
                src={fullString}
                alt={ownerName}
                title={ownerName}
              />
            </div>
            <div className="rating">
              <h4>{ownerName}</h4>
              <Stars value={averageRating(review)} />
            </div>
          </section>
        </header>
        <div className="wrapper">
          <div className={isDivOpen ? "reviewItemOpen" : "reviewItemClose"}>
            {textDescription}
            {isOpen && (
              <>
                <Ratings review={review} />
                <button
                  className="reviewButton"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Read Less
                </button>
              </>
            )}
          </div>
          {!isOpen && (
            <button className="reviewButton" onClick={() => setIsOpen(!isOpen)}>
              Read More
            </button>
          )}
        </div>
        <div className="reviewDates">
          {location} . {country} .{" "}
          {new Date(startDate).toLocaleDateString("en-en", {
            month: "short",
            day: "2-digit",
          })}
          <span> - </span>
          {new Date(endDate)
            .toLocaleDateString("en-en", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            })
            .replace(",", "")}
        </div>
      </section>
    </Accordion>
  );
}
