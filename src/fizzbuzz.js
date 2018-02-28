/* FizzBuzz. 

For a given natural number greater than zero return:
- 'fizz' if the number is dividable by 3
- 'buzz' if the number is dividable by 5
- 'fizzbuzz' if the number is dividable by 15
- the input number if no other requirement is fulfilled
*/

function fizzbuzz(number) {
  var result;
  if (number === 1) {
    result = number;
  } else if (number % 3 === 0) {
    result = "fizz";
  }
  return result;
}

module.exports = fizzbuzz;
