import React from "react";
import ReviewItem from "../reviewItem/reviewItem.js";
import "./reviewList.css";

export default function ReviewList({ reviews }) {
  // const [reviews, setReviews] = useState([]);
  const reviewsList = reviews.map((review, index) => {
    const stringId =
      "https://res.cloudinary.com/trustedhousesitters/image/upload/t_square_small,f_auto/v1/remote_media/media/photo";
    const fullString = stringId.concat(review.photo.publicId.slice(24));

    return (
      <div className="reviews-wrapper" key={index}>
        <ReviewItem
          ownerName={review.ownerName}
          textDescription={review.description}
          review={review.review}
          location={review.location}
          country={review.country}
          fullString={fullString}
          startDate={review.startDate}
          endDate={review.endDate}
        />
      </div>
    );
  });

  return <div>{reviewsList}</div>;
}
