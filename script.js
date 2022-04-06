export const capitalizeFirstLetter = function capitalizeFirstLetter(str) {
  return str.replace(str[0], str[0].toUpperCase());
};

export const reverseString = function reverseString(str) {
  return str.split("").reverse().join("");
};

export const calculator = {
  add: function (a, b) {
    return a + b;
  },

  subtract: function (a, b) {
    return a - b;
  },

  multiply: function (a, b) {
    return a * b;
  },

  divide: function (a, b) {
    return a / b;
  },
};

export const caesarCipher = function caesarCipher(str, shift) {
  const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");

  let result = "";
  for (let a of str) {
    let alpha = alphabetArr.indexOf(a.toLowerCase()) + shift;
    if (a === a.toUpperCase()) {
      if (alphabetArr.indexOf(a.toLowerCase()) === -1) {
        result += " ";
      } else if (alpha >= alphabetArr.length) {
        alpha = alphabetArr.indexOf(a.toLowerCase()) + shift;
        result += alphabetArr[alpha - alphabetArr.length].toUpperCase();
      } else {
        alpha = alphabetArr.indexOf(a.toLowerCase()) + shift;
        result += alphabetArr[alpha].toUpperCase();
      }
    } else if (shift > 0) {
      if (alphabetArr.indexOf(a) === -1) {
        result += " ";
      } else {
        alpha = alphabetArr.indexOf(a) + shift;
        if (alpha >= alphabetArr.length) {
          result += alphabetArr[alpha - alphabetArr.length];
        } else {
          result += alphabetArr[alpha];
        }
      }
    } else if (shift < 0) {
      alpha = alphabetArr.indexOf(a) + shift;
      if (alphabetArr.indexOf(a) === -1) {
        result += " ";
      } else {
        if (alpha < 0) {
          result += alphabetArr[alphabetArr.length + alpha];
        } else {
          result += alphabetArr[alpha];
        }
      }
    }
  }
  return result;
};

export const analyzeTheArray = function analyzeTheArray(arr) {
  let avg = 0;

  let average = arr.forEach((element) => {
    avg += element;
  });
  average = avg / arr.length;

  let min = arr.reduce((acc, value) => Math.min(acc, value), arr[0]);

  let max = arr.reduce((acc, value) => Math.max(acc, value), arr[0]);

  let length = arr.length;
  return {
    average,
    min,
    max,
    length,
  };
};

export function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
export const mockCallback = jest.fn((x) => 42 + x);
forEach([0, 1], mockCallback);

console.log(mockCallback);

const foo = "Hello World";
console.log(foo);
