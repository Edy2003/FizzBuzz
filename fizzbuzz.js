function fizzbuzz(arr) {
  return arr.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      return "fizzbuzz";
    } else if (num % 3 === 0) {
      return "fizz";
    } else if (num % 5 === 0) {
      return "buzz";
    } else {
      return num;
    }
  });
}

const arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));
console.log(arr);

const arrFizzBuzz = fizzbuzz(arr);
console.log(arrFizzBuzz);
