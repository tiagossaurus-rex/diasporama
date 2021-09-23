import React from "react";
import star from "../../icons/star.png";

class Stars extends React.Component {
  render() {
    return (
      <div>
        {Array.from(Array(this.props.value).keys()).map(function (
          element,
          index
        ) {
          return <img src={star} alt="star" width="15" height="15" />;
        })}
      </div>
    );
  }
}

export default Stars;
