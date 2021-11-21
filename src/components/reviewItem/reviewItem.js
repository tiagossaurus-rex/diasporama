import React, { useState } from "react";
import Ratings from "../ratings/ratings.js";
import Stars from "../stars/stars.js";
import apostrophe from "../../icons/apostrophe.png";
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
  const descStart = textDescription.substring(0, 150);
  const descMore = textDescription.substring(150, textDescription.length);

  return (
    <section key={index}>
      <div className="review-wrapper">
        <div className="review-identation">
          <div className="review-quote-header">
            <span className="review-blockquote">
              <img src={apostrophe} alt="apostrophe" />
            </span>

            <div className={isDivOpen ? "reviewItemOpen" : "reviewItemClose"}>
              {descStart}

              {isOpen && (
                <>
                  {descMore}
                  <Ratings review={review} />
                  <button
                    className="reviewButton"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Read Less
                  </button>
                </>
              )}

              {!isOpen && (
                <>
                  <span> ... </span>

                  <button
                    className="reviewButton reviewButtonSeeMore"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    Read More
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <section className="image-and-details">
          <img
            className="imageReview"
            src={fullString}
            alt={ownerName}
            title={ownerName}
          />
          <div className="rating">
            <span>{ownerName}</span>
            <span>
              <Stars value={averageRating(review)} />
            </span>
            <span className="reviewDates">
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
            </span>
          </div>
        </section>
      </div>
    </section>
  );
}
