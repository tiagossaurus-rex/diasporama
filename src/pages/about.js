import React, { useState, useEffect } from "react";
import Reviews from "../components/reviews/reviews.js";

export function About() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8888/.netlify/functions/getReviews"
      );
      const reviews = await response.json();

      setReviews(reviews);
      // setReviews(reviews.filter(Boolean));
    };

    fetchData();
  }, []);

  return (
    <div>
      {reviews.map((review, index) => (
        <div>
          <p key={index}>{review.description}</p>

          <Reviews review={review} />
        </div>
      ))}
    </div>
  );
}

// const displayReviews = Object.values(reviews).map((data) => {
//   return (
//     <div>
//       <p>{review.description}</p>
//     </div>
//   );
// });
// return <>{displayReviews} </>;
// }
// const fields: JSX.Element[] = [];
// for (let i = 1; i <= committedFieldsToAdd; i++) {
//   fields.push(<img
//     src="./icons/star.png"
//     alt="star"
//     width="150"
//     height="150"
//   />);
// }
