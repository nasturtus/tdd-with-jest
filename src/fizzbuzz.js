/* FizzBuzz. 

For a given natural number greater than zero return:
- 'fizz' if the number is dividable by 3
- 'buzz' if the number is dividable by 5
- 'fizzbuzz' if the number is dividable by 15
- the input number if no other requirement is fulfilled
*/

function fizzbuzz(number) {
  var str = "";
  if (number % 3 === 0) {
    str = "fizz";
  }
  if (number % 5 === 0) {
    str += "buzz";
  }

  return str.length > 0 ? str : number;
}

module.exports = fizzbuzz;
