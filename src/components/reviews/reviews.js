import React from "react";
import Stars from "../stars/stars.js";

class Reviews extends React.Component {
  render() {
    return (
      <div>
        <li>
          <span>Organised</span>
          <Stars value={this.props.review.organised} />
        </li>
        <li>
          <span>Amazing</span>
          <Stars value={this.props.review.reliable} />
        </li>

        {/* <span>Reliable</span><Stars value={this.props.review.reliable /> */}
      </div>
    );
  }
}

export default Reviews;
