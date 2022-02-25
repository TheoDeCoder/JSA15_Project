import data from "./data.js";

export const server = function () {
  return new Promise(function (resolve, reject) {
    resolve(data);
  });
};

export const detail = function (index) {
  return new Promise(function (resolve, reject) {
    const test = data[index];
    if (test) {
      resolve(test);
    }
    reject("sai r");
  });
};
