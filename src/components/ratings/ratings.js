import React from "react";
import Stars from "../stars/stars.js";

class Ratings extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {Object.entries(this.props.review)

            .filter((item) => {
              return typeof item[1] === "number";
            })
            .map((item) => {
              return (
                <li>
                  <span>{item[0]}</span>
                  <Stars value={item[1]} />
                </li>
              );
            })}
          {/* <li> */}
          {/* <span>Talented</span>
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
        </ul> */}
        </ul>

        {/* <span>Reliable</span><Stars value={this.props.review.reliable /> */}
      </div>
    );
  }
}

export default Ratings;
