const axios = require("axios");
const cheerio = require("cheerio");

const API_ENDPOINT =
  "https://www.trustedhousesitters.com/house-and-pet-sitters/united-kingdom/england/london/l/1687461/";

exports.handler = async (event, context) => {
  try {
    const response = await axios(API_ENDPOINT, { responseType: "document" });
    const body = await response.data;

    const $ = cheerio.load(body);
    const reviews = $("#feedback-review-list p")
      .map((i, review) => $(review).text())
      .toArray();
    return { statusCode: 200, reviews };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};

// exports.handler = async (event, context) => {
//   const data = [
//     { id: "1", text: "Hi", image: "", rating: "***" },
//     { id: "2", text: "Hola", image: "", rating: "*" },
//     { id: "3", text: "Salut", image: "", rating: "***" },
//   ];
//   return { statusCode: 200, body: JSON.stringify({ data }) };
// };

// #feedback-review-list > div > div:nth-child(2) > div > p
