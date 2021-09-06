import React, { useState, useEffect } from "react";

export function About() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8888/.netlify/functions/getReviews"
      );
      const reviews = await response.json();

      setReviews(reviews.filter(Boolean));
    };

    fetchData();
  }, []);

  return (
    <div>
      {reviews.map((review, index) => (
        <>
          <p key={index}>{review.description}</p>
          {/* {Array.from(Array(5)).fill("")} */}
          {Array.from(Array(5))
            .fill("")
            .map((i) => {
              <div
                style={{
                  backgroundImage: `url('./MYBOX/_${i}.jpg')`,
                }}
              ></div>;
            })}
        </>
      ))}
    </div>
  );

  //make an array of 5 empty objects. map an array of five elements
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
