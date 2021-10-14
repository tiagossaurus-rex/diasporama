import React from "react";
import Stars from "../stars/stars.js";

class Ratings extends React.Component {
  render() {
    return (
      <div>
        <ol>
          <li>
            <span>Talented</span>
            <Stars value={this.props.review.organised} />
          </li>
          <li>
            <span>Intuitive</span>
            <Stars value={this.props.review.reliable} />
          </li>
          <li>
            <span>Ingenuous</span>
            <Stars value={this.props.review.tidy} />
          </li>
        </ol>

        {/* <span>Reliable</span><Stars value={this.props.review.reliable /> */}
      </div>
    );
  }
}

export default Ratings;
