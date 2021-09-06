const axios = require("axios");
const cheerio = require("cheerio");

const API_ENDPOINT =
  "https://www.trustedhousesitters.com/house-and-pet-sitters/united-kingdom/england/london/l/1687461/";
exports.handler = async (event, context) => {
  try {
    const response = await axios(API_ENDPOINT, { responseType: "document" });
    const body = await response.data;
    const $ = cheerio.load(body);
    const scripts = $("script").filter(function (i, el) {
      return $(this).html().includes("window.__INITIAL_STATE__");
    });
    const scriptText = scripts.html();
    const scriptTextTrimStart = scriptText
      .slice(0, scriptText.search("window.__INITIAL_I18N_STORE__"))
      .trim()
      .replace("window.__INITIAL_STATE__ =", "");
    const scriptTextTrimmed = scriptTextTrimStart
      .substring(0, scriptTextTrimStart.length - 1)
      .trim()
      .replace(/undefined/g, "null");

    const parsedJSON = JSON.parse(scriptTextTrimmed);
    //console.log(parsedJSON.search.profile["1687461"]);
    const parsedReviews = parsedJSON.search.profile["1687461"].pastAssignments;

    const findaReview = parsedReviews
      .filter((element, index) => typeof element.review === "object")
      .map((review) => review.review);
    console.log(findaReview);

    return { statusCode: 200, body: JSON.stringify(findaReview) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};

// const axios = require("axios");
// const cheerio = require("cheerio");

// const API_ENDPOINT =
//   "https://www.trustedhousesitters.com/house-and-pet-sitters/united-kingdom/england/london/l/1687461/";
// exports.handler = async (event, context) => {
//   try {
//     const response = await axios(API_ENDPOINT, { responseType: "document" });
//     const body = await response.data;
//     const $ = cheerio.load(body);
//     const scripts = $("script").filter(function (i, el) {
//       return $(this).html().includes("window.__INITIAL_STATE__");
//     });
//     const scriptText = scripts.html();
//     const slicedText = scriptText.slice(
//       32,
//       scriptText.search(',"completedSteps"')
//     );
//     const somewhatJSON = slicedText.replace(/undefined/g, '"truck"') + "}}}}";

//     console.log(somewhatJSON);
//     const parsedJSON = JSON.parse(somewhatJSON);
//     console.log(
//       parsedJSON.search.profile["1687461"].completedSteps.pastAssignments
//     );
//     const parsedReviews =
//       parsedJSON.search.profile["1687461"].completedSteps.pastAssignments;

//     const findaReview = parsedReviews
//       .filter((element, index) => typeof element.review === "object")
//       .map((review) => review.review);
//     return { statusCode: 200, body: findaReview };
//   } catch (error) {
//     console.log(error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: "Failed fetching data" }),
//     };
//   }
// };
