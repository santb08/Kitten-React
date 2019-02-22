import Names from "../data/names.js";
import hobbies from "../data/hobbies.js";

/**
 * Retorns a random number between the limits of @params
 * @param inf default as 1
 * @param sup default as 20
 * @returns {number} random number expected
 */
function getRandomNumber(inf = 1, sup = 20) {
  return Math.floor(Math.random() * sup) + inf;
}

/**
 * Returns a random name
 * @returns {string}
 */
function getName() {
  return Names[getRandomNumber(0, Names.length)];
}

/**
 * Returns an array of 3 elements with random hobbies
 * @returns {string[]}
 */
function getHobbies(){
  return [hobbies[getRandomNumber(0,hobbies.length)],
      hobbies[getRandomNumber(0,hobbies.length)],
      hobbies[getRandomNumber(0,hobbies.length)]];
}

/**
 * It's an async function that returns a json object with a random cat from CatAPI
 * @returns {Promise<any>}
 */
const callCatAPI = async () => {
  const url = "https://api.thecatapi.com/v1/images/search";
  let result = await fetch(url);
  return result.json()
};

/**
 * Exports the functions from this randomCat
 */
export default {
  getName: getName,
  getImage: callCatAPI,
  getRandomDistance: getRandomNumber(1, 20),
  getHobbies: getHobbies
};
