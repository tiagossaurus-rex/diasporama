exports.handler = async (event, context) => {
  //   try {
  //     const response = await fetch(API_ENDPOINT);
  //     const data = await response.json();
  //     return { statusCode: 200, body: JSON.stringify({ data }) };
  //   } catch (error) {
  //     console.log(error);
  //     return {
  //       statusCode: 500,
  //       body: JSON.stringify({ error: "Failed fetching data" }),
  //     };
  //    one function that gets called like a server
  //look at this require cheerio yarn add cheerio restarts server
  // const { data } = await Axios.get(
  //   "https://www.trustedhousesitters.com/house-and-pet-sitters/united-kingdom/england/london/l/1687461/"
  // );
  //   }

  const data = [
    { id: "1", text: "Hi", image: "img src", rating: "***" },
    { id: "2", text: "Hola", image: "", rating: "*" },
    { id: "3", text: "Salut", image: "", rating: "***" },
  ];
  return { statusCode: 200, body: JSON.stringify({ data }) };
};
