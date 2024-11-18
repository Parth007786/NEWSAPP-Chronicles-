let dateString = new Date(Date.now()).toLocaleDateString("en-IN").split("/");
let year = dateString[2];
let month = dateString[1];
let day = dateString[0] - 1;

let formattedDate = `${year}-${month}-${day}`;

export const fetchNews = async (topic) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&from=${formattedDate}&sortBy=publishedAt&apiKey=3eb6a584e7274621a05492e2e033b4dd`
  );
  const data = await response.json();
  return data.articles;
};
