const getReviews = require("./netlify/functions/getReviews").handler;

getReviews().then((reviews) => console.log(reviews));
