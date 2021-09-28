const axios = require("axios");
const cheerio = require("cheerio");

const API_ENDPOINT =
  "https://www.trustedhousesitters.com/house-and-pet-sitters/united-kingdom/england/london/l/1687461/";
async function fetchPage(url) {
  const response = await axios(url, { responseType: "document" });
  return response.data;
}

function getScriptTagContaining(html, searchText) {
  const $ = cheerio.load(html);
  const scripts = $("script").filter(function (i, el) {
    return $(this).html().includes(searchText);
  });
  return scripts.html();
}

function getStatementBefore(stmts, searchText) {
  const textBefore = stmts.slice(0, stmts.search(searchText)).trim();
  return textBefore.substring(0, textBefore.length - 1);
}

exports.handler = async (event, context) => {
  try {
    const body = await fetchPage(API_ENDPOINT);
    const scriptText = getScriptTagContaining(body, "window.__INITIAL_STATE__");

    const statement = getStatementBefore(
      scriptText,
      "window.__INITIAL_I18N_STORE__"
    );

    const scriptTextTrimmed = statement
      .replace("window.__INITIAL_STATE__ =", "")
      .trim()
      .replace(/undefined/g, "null")
      .replace(/(\b)cat(\b)/g, "raccoon")
      .replace(/(\b)cats(\b)/g, "raccoons")
      .replace(/(\b)house(\b)/g, "den");

    const parsedJSON = JSON.parse(scriptTextTrimmed);
    const parsedReviews = parsedJSON.search.profile["1687461"].pastAssignments;
    //get value of Assignment statement  line 35
    let findaReview = parsedReviews
      .filter((element, index) => typeof element.review === "object")
      .map((review) => review.review)
      .filter((element, index) => element !== null)
      .map((review) => review);
    console.log(findaReview);

    return { statusCode: 200, body: JSON.stringify(findaReview) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data etc.." }),
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
