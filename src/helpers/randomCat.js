import Names from "../data/names.js";
import App from "../App"

function getRandomNumber(inf = 1, sup = 20) {
  return Math.floor(Math.random() * sup) + inf;
}

function getName() {
  App.kittyName = Names[getRandomNumber(0, Names.length)];
  console.log(App.kittyName)
  return App.kittyName;
}

const callCatAPI = async () => {
  const url = "https://api.thecatapi.com/v1/images/search";
  let result = await fetch(url);
  let json = result.json();
  return json;
};

export default {
  getName: getName,
  getImage: callCatAPI,
  getRandomDistance: getRandomNumber(1, 20)
};
