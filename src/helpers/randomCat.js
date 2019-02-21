import Names from "../data/names.js";
import hobbies from "../data/hobbies.js";

function getRandomNumber(inf = 1, sup = 20) {
  return Math.floor(Math.random() * sup) + inf;
}

function getName() {
  return Names[getRandomNumber(0, Names.length)];
}

function getHobbies(){
  var Hobbie=[hobbies[getRandomNumber(0,hobbies.length)],hobbies[getRandomNumber(0,hobbies.length)],hobbies[getRandomNumber(0,hobbies.length)]];
  return Hobbie;
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
