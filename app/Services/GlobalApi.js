import { create } from "apisauce";

// define the api
const api = create({
  baseURL: "https://newsapi.org/v2",
});
const apiKey = "?country=us&apiKey=c081dc6e384e43f9b9f97d429da01e44";

//call API
const getTopHeadline = api.get("/top-headlines" + apiKey);
const getByCategory = (category) =>
  api.get(
    "/everything?q=" + category + "&apiKey=c081dc6e384e43f9b9f97d429da01e44"
  );

export default { getTopHeadline, getByCategory };

//from newsAPI
//https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c081dc6e384e43f9b9f97d429da01e44
