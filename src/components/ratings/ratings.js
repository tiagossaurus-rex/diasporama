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
                <li key={item[0]}>
                  <span>{wordSwap(item[0])}</span>
                  <Stars value={item[1]} />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Ratings;

function wordSwap(key) {
  let keySwap;
  switch (key) {
    case "reliable":
      keySwap = "Vernacular";
      break;
    case "organised":
      keySwap = "Messianic";
      break;
    case "tidy":
      keySwap = "Clairvoyant";
      break;
    case "selfSufficient":
      keySwap = "Eloquent";
      break;
    case "petCare":
      keySwap = "Down to Earth";
      break;
    default:
      keySwap = key;
  }
  return keySwap;
}
