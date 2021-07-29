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
  //   }

  const data = [
    { id: "1", text: "Hi", image: "", rating: "***" },
    { id: "2", text: "Hola", image: "", rating: "*" },
    { id: "3", text: "Salut", image: "", rating: "***" },
  ];
  return { statusCode: 200, body: JSON.stringify({ data }) };
};
